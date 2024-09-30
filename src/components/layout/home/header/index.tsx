import { Flex, Layout } from 'antd';
import { FC } from 'react'

import { Logo } from '@/components/elements';
import { Button } from '@/components/ui';

import variables from '@/styles/variables.module.scss';

const { Header } = Layout;

type HomeHeaderProps = {
  onLogin: VoidFunction, 
  onRegister: VoidFunction
}

export const HomeHeader: FC<HomeHeaderProps> = ({ onLogin, onRegister }) => (
  <Header style={{ padding: `0 ${variables.sizeXl}` }}>
    <Flex align={'center'} justify={'space-between'}>
      <Logo />

      <Flex align={'center'} gap={16}>
        <Button text={'Log in'} type={'default'} onClick={onLogin} />
        <Button text={'Sign up'} onClick={onRegister} />
      </Flex>
    </Flex>
  </Header>
)