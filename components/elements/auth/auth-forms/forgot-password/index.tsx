'use client';

import { FC, useState, useTransition } from 'react';
import { Flex, Input } from 'antd';
import Link from 'next/link';

import { FormItem, Button } from '@/components/ui';
import { AuthFormContent } from '@/components/elements';
import { AuthForm } from '../../auth-form';
import { ForgotPasswordValuesProps } from '@/schemas/types';
import { forgotPassword } from '@/actions/forgot-password';
import { MessageProps } from '@/types';
import { AlertMessage } from '@/components/ui/alert-message';

export const ForgotPasswordForm :FC= () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<MessageProps | null>(null);

  const handleSubmit = async (values: ForgotPasswordValuesProps) => {
    setMessage(null);

    startTransition(() => {
      forgotPassword(values)
        .then((data)=> {
          setMessage(data)
        })
    });
  };

  return (
    <AuthForm onFinish={handleSubmit}>
      <AuthFormContent title={'Forgot password'}>
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

        <AlertMessage data={message} />

        <FormItem>
          <Button text={'Send'} htmlType={'submit'} loading={isPending} wide />
        </FormItem>

        <Flex justify={'flex-end'} align={'center'} gap={16}>
          <Link href={'/auth/login'} style={{ fontSize: 16 }}>Log in</Link>
        </Flex>
      </AuthFormContent>
    </AuthForm>
  )
}