import type { ReactNode } from 'react';

import { WorkspaceViewLayout } from '@/app/(user)/workspace/[workspaceId]/_layout';

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
