import { Role } from '@prisma/client';
import { DefaultSession, DefaultUser } from 'next-auth';

export type User = DeafaultSession['user'] & {
  role: Role
  isTwoFactorEnabled: boolean
  isOAuth: boolean
}

declare module 'next-auth' {
  interface Session {
    user: User
  }
}