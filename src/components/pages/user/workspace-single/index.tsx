'use client';

import { FC } from "react";
import { useParams } from 'next/navigation';
import { Flex } from "antd"

import { Title } from '@/components/ui';
import { TasksTable } from '@/components/elements';

export const WorkspacePage: FC = () => {
  const { workspaceId } = useParams();

  return (
    <Flex vertical gap={24}>
      <Title level={4}>Workspace #{workspaceId}</Title>
      <TasksTable />
    </Flex>
  );
}

