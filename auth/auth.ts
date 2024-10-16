import NextAuth from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { Role } from '@prisma/client';
import authConfig from '@/auth/auth.config';
import { getUserById } from '@/data/user';
import prisma from '@/lib/prisma';

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
  },
  events: {
    async linkAccount({user}) {
      await prisma.user.update({
        where: {id: user.id},
        data: {emailVerified: new Date()}
      });
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials') return true;

      const existingUser = await getUserById(user.id ?? '')

      if (!existingUser?.emailVerified) return false;

      return true;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token
    },
    session({ session, token }) {

      if (session.user && token.sub) {
        session.user.id = token.sub
      }

      if (session.user && token.role) {
        session.user.role = token.role as Role
      }
      return session
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})