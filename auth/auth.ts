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
  callbacks: {
    async jwt({ token }) {
      console.log({ token });
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token
    },
    session({ session, token }) {
      console.log({ session });

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