'use client';

import { useSession } from 'next-auth/react';
import { FC } from 'react';

import { Title } from '@/components/ui';

export const DashboardPage: FC = () => {
  const { data: session } = useSession();

  return (
    <section>
      <Title level={4}>Welcome, {session?.user?.firstName}</Title>
    </section>
  )
}