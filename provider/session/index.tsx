'use client';

import { SessionProvider as AuthSessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from 'react';

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthSessionProvider>
      {children}
    </AuthSessionProvider>
  );
}

