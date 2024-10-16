import { Role } from '@prisma/client';
import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    firstName: string;
    lastName: string;
    role: Role;
    image?: string | null;
    email: string;
  }

  interface Session extends DefaultSession {
    user: User & {
      id: string; 
    };
    
  }

  interface JWT extends User{
    id: string; 
  }
}