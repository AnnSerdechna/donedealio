import type { ReactNode } from 'react';

import { WorkspaceViewLayout } from './(layout)';

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
