import NextAuth, { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '../../../../../lib/prisma';

const authOptions: AuthOptions = {
  providers: [],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };