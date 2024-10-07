'use client';

import { FC } from "react";
import { useParams } from 'next/navigation';
import { Flex } from "antd"

import { Title } from '@/components/ui';
import { useWorkspaceQuery } from '@/graphql/types';

export const WorkspacePage: FC = () => {
  const { workspaceId } = useParams();
  const { data } = useWorkspaceQuery({
    variables: {
      where: {
        id: workspaceId as string
      }
    }
  });

  return (
    <Flex vertical gap={8}>
      <Title level={5}>{data?.workspace?.name}</Title>
    </Flex>
  );
}

