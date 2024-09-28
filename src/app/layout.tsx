import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';
import { ThemeProvider, ApolloProvider } from '@/provider';
import './global.scss';

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
  return (
    <html lang={'en'}>
      <body className={inter.className}>
        <ApolloProvider>
          <AntdRegistry>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </AntdRegistry>
        </ApolloProvider>
      </body>
    </html>
  );
}
