import NextAuth from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { Role } from '@prisma/client';
import authConfig from '@/auth.config';
import { getUserById } from '@/data/user';
import prisma from '@/lib/prisma';
import { getTwoFactorConfirmationByUserId } from './data/two-factor-confirmation';
import { getAccountByUserId } from './data/account';

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

      const existingUser = await getUserById(user.id ?? '');

      if (!existingUser?.emailVerified) return false;

      if (existingUser?.isTwoFactorEnable) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

        if (!twoFactorConfirmation) return false;

        await prisma.twoFactorConfirnation.delete({
          where: { id: twoFactorConfirmation.id }
        });
      };

      return true;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnable = existingUser.isTwoFactorEnable;

      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.isOAuth = token.isOAuth;
        session.user.name = token.name
        session.user.email = token.email;
        session.user.isTwoFactorEnable = token.isTwoFactorEnable;
      }

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