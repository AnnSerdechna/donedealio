import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Noto_Sans } from 'next/font/google';
import { getServerSession } from 'next-auth';

import { ThemeProvider, ApolloProvider, SessionProvider } from '@/provider';
import { authOptions } from './api/auth/[...nextauth]/route';
import '@/styles/global.scss';

const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900'] });

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

  const session = await getServerSession(authOptions);

  return (
    <html lang={'en'}>
      <body className={notoSans.className}>
        <SessionProvider session={session}>
          <ApolloProvider>
            <AntdRegistry>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </AntdRegistry>
          </ApolloProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
