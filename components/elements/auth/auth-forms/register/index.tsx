'use client';

import { FC, useState, useTransition } from 'react';
import { Input } from 'antd';

import { AuthCard } from '@/components/elements/auth/auth-card';
import { register } from '@/actions/register';
import { Button, Form, FormItem } from '@/components/ui';
import { RegisterValuesProps } from '@/schemas/types';
import { AlertMessage } from '@/components/ui/alert-message';
import { MessageProps } from '@/types';

const { Password } = Input;

export const RegisterForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<MessageProps | null>(null);

  const handleRegister = async (values: RegisterValuesProps) => {
    setMessage(null);

    startTransition(() => {
      register(values)
        .then((data) => {
          setMessage(data)
        })
    });
  };

  return (
    <AuthCard
      title={'Sign up'}
      description={'Already have account?'}
      backLinkUrl={'/auth/login'}
      backLinkLabel={'Sign in'}
      hasSocials
    >
      <Form onFinish={handleRegister}>
        <FormItem
          name={'name'}
          label={'Name'}
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input size={'large'} placeholder={'Your name'} />
        </FormItem>
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
            {
              min: 6,
              message: 'Min 6 characters required!',
            }
          ]}
          hasFeedback
        >
          <Password size={'large'} placeholder={'******'} />
        </FormItem>

        <FormItem
          name={'confirm'}
          label={'Confirm password'}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator: (_, value) => {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Password size={'large'} placeholder={'******'} />
        </FormItem>

        <AlertMessage data={message} />

        <FormItem>
          <Button
            text={'Sign up'}
            htmlType={'submit'}
            loading={isPending}
            wide
          />
        </FormItem>
      </Form>
    </AuthCard>
  )
}