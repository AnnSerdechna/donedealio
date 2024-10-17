'use client';

import { Flex, Button, ButtonProps } from 'antd'
import { FC } from 'react'
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';

const SocialBtn: FC<ButtonProps> = ({ ...props }) => (
  <Button 
    type={'primary'} 
    style={{ width: '100%' }} 
    icon={<GoogleOutlined />} 
    {...props}
  />
)

export const SocialBtns: FC = () => {
  const onSignin = (provider: 'google' | 'github') => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT })
  };

  return (
    <Flex gap={8}>
      <SocialBtn 
        icon={<GoogleOutlined />} 
        onClick={() => onSignin('google')}
      />
      <SocialBtn
        icon={<GithubOutlined />}
        onClick={() => onSignin('github')}
      />
    </Flex>
  )
}