import { FC, Fragment, ReactNode } from 'react'
import { Title } from '../../ui'
import { Flex } from 'antd'

import variables from '@/styles/variables.module.scss';

type AuthFormContentProps = {
  title: string
  children: ReactNode
}
export const AuthFormContent: FC<AuthFormContentProps> = ({ title, children }) => {
  return (
    <Fragment>
      <Flex gap={variables.sizeLg} vertical>
        <Title centered>{title}</Title>

        <div>{children}</div>
      </Flex>
    </Fragment>
  )
}