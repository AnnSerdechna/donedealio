'use client';

import { useParams } from 'next/navigation';
import { FC, Fragment } from 'react';

import { Title } from '@/components/ui';

export const WorkspacePage: FC = () => {
  const { workspaceId } = useParams();

  return (
    <Fragment>
      <Title>Workspace #{workspaceId}</Title>
    </Fragment>
  )
}