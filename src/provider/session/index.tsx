'use client';

import { SessionProvider as AuthSessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from 'react';

export const SessionProvider: FC<PropsWithChildren<{session: any}>> = ({ session, children }) => {
  return (
    <AuthSessionProvider session={session}>
      {children}
    </AuthSessionProvider>
  );
}

