import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App as AntdApp } from "antd";
import { Roboto } from 'next/font/google';

import { ThemeProvider, ApolloProvider, SessionProvider } from '@/provider';
import '@/styles/global.scss'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

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

  return (
    <html lang={'en'}>
      <body className={roboto.className}>
        <SessionProvider>
          <ApolloProvider>
            <AntdApp>
              <AntdRegistry>
                <ThemeProvider>
                  {children}
                </ThemeProvider>
              </AntdRegistry>
            </AntdApp>
          </ApolloProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
