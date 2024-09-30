import { Flex } from 'antd';
import { ReactNode } from 'react';

export default function UiLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <Flex wrap align={'center'} gap={32} style={{padding: 24}}>
      {children}
    </Flex>
  )
}