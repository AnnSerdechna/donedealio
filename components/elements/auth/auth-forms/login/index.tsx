'use client';

import { FC, useState, useTransition } from 'react';
import { Flex, Input } from 'antd';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { FormItem, Button, Form } from '@/components/ui';
import { AuthCard } from '@/components/elements/auth/auth-card';
import { login } from '@/actions/login';
import { LoginValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';
import { AlertMessage } from '@/components/ui/alert-message';

const { Password } = Input;

export const LoginForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<MessageProps | null>(null);
  const searchParams = useSearchParams();

  const oauthError = searchParams.get('error') === 'OAuthAccountNotLinked'
    ? 'Email already taken!'
    : '';

  const handleSubmit = async (values: LoginValuesProps) => {
    setMessage(null);

    startTransition(() => {
      login(values)
        .then((data) => {
          setMessage(data)
        })
    });
  };

  return (
    <AuthCard
      title={'Sign in'}
      description={"Haven't account yet?"}
      backLinkUrl={'/auth/register'}
      backLinkLabel={'Sign up'}
      hasSocials
    >
      <Form onFinish={handleSubmit}>
        <FormItem
          name={'email'}
          label={'Email'}
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input type={'email'} size={'large'} placeholder={'email@example.com'} />
        </FormItem>
        <FormItem
          name={'password'}
          label={'Password'}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Password size={'large'} placeholder={'******'} />
        </FormItem>

        <Flex justify={'end'} style={{ marginBottom: 16 }}>
          <Link href={'/auth/forgot-password'}>Forgot password</Link>
        </Flex>

        {!!oauthError && <AlertMessage message={oauthError} type={'error'} />}

        <AlertMessage data={message} />

        <FormItem>
          <Button
            text={'Log in'}
            htmlType={'submit'}
            loading={isPending}
            wide
          />
        </FormItem>
      </Form>
    </AuthCard>
  )
}
