import { FC, Fragment, ReactNode } from 'react'
import { Flex } from 'antd'

import { Title } from '@/components/ui';
import variables from '@/styles/variables.module.scss';
import { Logo } from '../../logo';

type AuthFormContentProps = {
  title: string
  children: ReactNode
}
export const AuthFormContent: FC<AuthFormContentProps> = ({ title, children }) => {
  return (
    <Fragment>
      <Flex gap={variables.sizeLg} vertical>
        <Flex vertical gap={4}>
          <Logo size={60} />
          <Title centered>{title}</Title>
        </Flex>

        <div>{children}</div>
      </Flex>
    </Fragment>
  )
}