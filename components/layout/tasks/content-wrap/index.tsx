import { FC, ReactNode } from 'react';

import { VSpace, Title } from '@/components/ui';
import { Flex } from 'antd';

type ContentWrapProps = {
  title: string
  children: ReactNode
  headerActions?: ReactNode
}

export const ContentWrap: FC<ContentWrapProps> = ({ title, headerActions, children }) => (
  <VSpace>
    <Flex align={'center'} justify={'space-between'}>
      <Title level={4}>{title}</Title>
      {headerActions }
    </Flex>

    {children}
  </VSpace>
)