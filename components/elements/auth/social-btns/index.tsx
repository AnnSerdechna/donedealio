'use client';

import { Flex, Button, ButtonProps } from 'antd'
import { FC } from 'react'
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';

export type SocialBtnsProps = {
  isLogin?: boolean
}

const SocialBtn: FC<ButtonProps> = ({ ...props }) => (
  <Button 
    type={'default'} 
    style={{ width: '100%' }} 
    icon={<GoogleOutlined />} 
    size={'large'}
    {...props}
  />
)

export const SocialBtns: FC<SocialBtnsProps> = ({ isLogin = false }) => {
  const onSignin = (provider: 'google' | 'github') => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT })
  };

  return (
    <Flex gap={24} vertical>
      <SocialBtn 
        icon={<GoogleOutlined />} 
        onClick={() => onSignin('google')}
      >
        {`Sign ${isLogin ? 'in' : 'up'} with Google`}
      </SocialBtn>
      <SocialBtn
        icon={<GithubOutlined />}
        onClick={() => onSignin('github')}
      >
        {`Sign ${isLogin ? 'in' : 'up'} with Google`}
      </SocialBtn>
    </Flex>
  )
}