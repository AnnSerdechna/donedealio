import type { ReactNode } from 'react';

import { TasksLayout } from '@/components/layout';

export default async function UserLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <TasksLayout>
      {children}
    </TasksLayout>
  );
}
