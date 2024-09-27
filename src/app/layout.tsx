import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';

import { ThemeProvider, ApolloProvider, SessionProvider } from '@/provider';
import { TasksLayout } from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DoneDealio',
  description: 'Task management app',
  keywords: ['task', 'todo', 'colaborate', 'team']
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await getServerSession()

  return (
    <html lang={'en'}>
      <body className={inter.className}>
        <ApolloProvider>
          <SessionProvider session={session}>
            <AntdRegistry>
              <ThemeProvider>
                <TasksLayout>
                  {children}
                </TasksLayout>
              </ThemeProvider>
            </AntdRegistry>
          </SessionProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
