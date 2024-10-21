import { FC, ReactNode } from 'react';
import { Flex } from 'antd';

import { VSpace, Title } from '@/components/ui';

type ContentContainerProps = {
  title: string
  children: ReactNode
  headerActions?: ReactNode
}

export const ContentContainer: FC<ContentContainerProps> = ({ title, headerActions, children }) => (
  <VSpace>
    <Flex align={'center'} justify={'space-between'}>
      <Title level={4}>{title}</Title>
      {headerActions}
    </Flex>

    {children}
  </VSpace>
)