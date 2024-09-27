import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';

import { ThemeProvider, ApolloProvider, SessionProvider } from '@/provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Template',
  description: 'Next JS, Prisma, Typegraphql',
  keywords: ['Next JS', 'prisma', 'graphql', 'typegraphql', 'antd']
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
                {children}
              </ThemeProvider>
            </AntdRegistry>
          </SessionProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
