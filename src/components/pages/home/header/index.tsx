import { Logo } from '@/components/elements/logo';
import { Flex, Layout } from 'antd';
import { FC } from 'react'
import Link from 'next/link';

const { Header } = Layout;

export const HomeHeader: FC = () => (
  <Header>
    <Flex align={'center'} justify={'space-between'}>
      <Logo />

      <Flex align={'center'} gap={16}>
        <Link href={'/auth/login'}>
          Log in
        </Link>
        <Link href={'/auth/register'}>
          Sign up
        </Link>
      </Flex>
    </Flex>
  </Header>

)