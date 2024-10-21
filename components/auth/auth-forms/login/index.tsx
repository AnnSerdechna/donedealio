'use client';

import { FC, useState, useTransition } from 'react';
import { Flex, Input, Form as AntForm } from 'antd';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { FormItem, Button, Form } from '@/components/ui';
import { login } from '@/actions/login';
import { LoginValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';
import { AlertMessage } from '@/components/elements/alert-message';

const { Password } = Input;

export const LoginForm: FC = () => {
  const [form] = AntForm.useForm();
  const [isPending, startTransition] = useTransition();
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);
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
          if (typeof data === 'object' && 'status' in data) {
            form.resetFields()
            setMessage(data);
          }

          if (typeof data === 'object' && 'twoFactorToken' in data) {
            setShowTwoFactor(true)
          }
        })
        .catch(() => {
          setMessage({ status: 'error', content: 'Something went wrong!' });
        });
    });
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Flex gap={24} vertical>
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

        {showTwoFactor && (
          <FormItem
            name={'code'}
            label={'Two factor code'}
            rules={[
              {
                required: true,
                message: 'Please input 2FA code!',
              },
            ]}
          >
            <Input size={'large'} placeholder={'123456'} />
          </FormItem>
        )}

        <Flex justify={'end'}>
          <Link href={'/auth/forgot-password'}>Forgot password</Link>
        </Flex>

        {!!oauthError && <AlertMessage message={oauthError} type={'error'} />}

        <AlertMessage data={message} />

        <FormItem>
          <Button
            text={showTwoFactor ? 'Confirm' : 'Sign in'}
            htmlType={'submit'}
            loading={isPending}
            wide
          />
        </FormItem>
      </Flex>
    </Form>
  )
}
