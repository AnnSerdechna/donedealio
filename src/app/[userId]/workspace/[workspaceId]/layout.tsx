import { WorkspaceViewLayout } from '@/components/layout';
import type { ReactNode } from 'react';

export default async function ViewLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <WorkspaceViewLayout>
      {children}
    </WorkspaceViewLayout>
  );
}
