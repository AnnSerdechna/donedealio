import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from "next-auth/providers/google"

import prisma from '../../../../../lib/prisma';
import { Role } from '@prisma/client';

const clientId = process.env.GOOGLE_ID as string;
const clientSecret = process.env.GOOGLE_SECRET as string;

const authOptions: AuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/register'
  },
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid email or password');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error('No user found with this email or missing password');
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Incorrect password');
        }

        return {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          image: user?.image
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email!,
              firstName: profile?.name || 'First',
              lastName: profile?.name || 'Last',
              password: '',
              role: Role.ADMIN, 
              image: profile?.image || undefined,
            },
          });
        }
      }
      return true; 
    },
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub; 
        session.user.firstName = token.firstName as string; 
        session.user.lastName = token.lastName as string; 
        session.user.role = token.role as Role; 
        session.user.image = token.image as string; 
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; 
        token.firstName = user.firstName; 
        token.lastName = user.lastName;
        token.role = user.role; 
        token.image = user.image; 
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions as AuthOptions);

export { handler as GET, handler as POST };
