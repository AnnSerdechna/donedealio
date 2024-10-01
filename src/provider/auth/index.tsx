'use client';

import { SessionProvider as AuthSessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

type SessionProviderProps = {
  children: ReactNode
  session: any
}

export const SessionProvider: FC<SessionProviderProps> = ({children, session}) => {
  return (
    <AuthSessionProvider
      session={session}
      basePath={process.env.NEXTAUTH_URL}
    >
      {children}
    </AuthSessionProvider>
  )
}