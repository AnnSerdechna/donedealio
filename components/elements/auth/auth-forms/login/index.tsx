'use client';

import { FC, useState, useTransition } from 'react';
import { Divider, Flex, Input } from 'antd';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Text, FormItem, Button } from '@/components/ui';
import { AuthFormContent } from '@/components/elements';
import { AuthForm } from '../../auth-form';
import { login } from '@/actions/login';
import { SocialBtns } from '../../social-btns';
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
    <AuthForm onFinish={handleSubmit}>
      <AuthFormContent title={'Log in'}>
        <SocialBtns />
        <Divider style={{ margin: 0 }}>or</Divider>
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
          <Input type={'email'} size={'large'} />
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
          <Password size={'large'} />
        </FormItem>

        <FormItem>
          <Flex justify={'end'}>
            <Link href={'/auth/forgot-password'}>Forgot password</Link>
          </Flex>
        </FormItem>

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

        <Flex justify={'space-between'} align={'center'}>
          <Text>{"Haven't account yet?"}</Text>
          <Link href={'/auth/register'}>Sign up</Link>
        </Flex>
      </AuthFormContent>
    </AuthForm>
  )
}
