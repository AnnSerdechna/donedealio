import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';
import { ApolloProvider } from '@/provider/apollo';
import { UserLayout } from '@/app/(user)/_layout';

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <ApolloProvider>
        <UserLayout>
          {children}
        </UserLayout>
      </ApolloProvider>
    </SessionProvider>
  );
}
