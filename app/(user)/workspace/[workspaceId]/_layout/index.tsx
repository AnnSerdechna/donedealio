'use client';

import { FC, PropsWithChildren } from "react";
import { useParams } from 'next/navigation';
import { Flex } from "antd"
import Link from 'next/link';

import { Title } from '@/components/ui';
import { useWorkspaceQuery } from '@/graphql/types';

export const WorkspaceViewLayout: FC<PropsWithChildren> = ({ children  }) => {
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
      <Flex justify={'space-between'}>
        <Title level={5}>{data?.workspace?.name}</Title>
        <Flex gap={16}>
          <Link href={`/workspace/${workspaceId}/table`}>Table</Link>
          <Link href={`/workspace/${workspaceId}/calendar`}>Calendar</Link>
        </Flex>
      </Flex>
     {children}
    </Flex>
  );
}
