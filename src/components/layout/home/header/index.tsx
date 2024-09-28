import { Flex, Layout } from 'antd';
import { FC } from 'react'

import { Logo } from '@/components/elements';
import { LinkBtn } from '@/components/ui';

const { Header } = Layout;

export const HomeHeader: FC = () => (
  <Header>
    <Flex align={'center'} justify={'space-between'}>
      <Logo />

      <Flex align={'center'} gap={16}>
        <LinkBtn href={'/auth/login'} text={'Log in'} />
        <LinkBtn href={'/auth/register'} text={'Sign up'} type={'outlined'} />
      </Flex>
    </Flex>
  </Header>

)