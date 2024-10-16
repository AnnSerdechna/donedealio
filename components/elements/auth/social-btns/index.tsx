'use client';

import { Flex, Button } from 'antd'
import { FC } from 'react'
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import { DEFAULT_LOGIN_REDIRECT } from '@/auth/routes';
import { signIn } from 'next-auth/react';

export const SocialBtns: FC = () => {
  const onSignin = (provider: 'google' | 'github') => {
    signIn(provider, {callbackUrl: DEFAULT_LOGIN_REDIRECT})
  };

  return (
    <Flex gap={8}>
      <Button type={'primary'} style={{width: '100%'}} icon={<GoogleOutlined />} onClick={() => onSignin('google')} />
      <Button type={'primary'}  style={{ width: '100%' }} icon={<GithubOutlined />} onClick={() => onSignin('github')} />
    </Flex>
  )
}