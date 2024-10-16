import { FC, ReactNode } from 'react'
import { Divider, Flex } from 'antd'

import { Title } from '@/components/ui';
import variables from '@/styles/variables.module.scss';
import { Logo } from '../../logo';
import { SocialBtns } from '../social-btns';

type AuthFormContentProps = {
  title: string
  children: ReactNode
}
export const AuthFormContent: FC<AuthFormContentProps> = ({ title, children }) => {
  return (
    <Flex gap={variables.sizeLg} vertical>
      <Flex vertical gap={4}>
        <Logo size={60} />
        <Title centered>{title}</Title>
      </Flex>

      <SocialBtns />
      <Divider style={{margin: 0}}>or</Divider>
      <Flex vertical gap={16}>{children}</Flex>
    </Flex>
  )
}