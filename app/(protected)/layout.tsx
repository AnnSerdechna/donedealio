import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

import { TasksLayout } from '@/components/layout';
import { ApolloProvider } from '@/provider';
import { auth } from '@/auth';

export default async function UserLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <ApolloProvider>
        <TasksLayout>
          {children}
        </TasksLayout>
      </ApolloProvider>
    </SessionProvider>
  );
}
