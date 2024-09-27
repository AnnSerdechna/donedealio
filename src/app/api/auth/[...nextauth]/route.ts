import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"

import prisma from '../../../../../lib/prisma'

// const authOptions: AuthOptions = {
  // providers: [
  //   GoogleProvider({
  //     clientId: process.env.GOOGLE_CLIENT_ID ?? '',
  //     clientSecret: process.env.GOOGLE_SECRET ?? '',
  //   }),
  // ],
  // adapter: PrismaAdapter(prisma),
  // secret: process.env.NEXTAUTH_SECRET
// };

// const handler = NextAuth(authOptions);


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST };