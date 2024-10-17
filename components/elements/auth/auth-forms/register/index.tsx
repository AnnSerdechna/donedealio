'use client';

import { FC, useState, useTransition } from 'react';
import { Divider, Flex, Input } from 'antd';
import Link from 'next/link';

import { AuthForm } from '@/components/elements/auth/auth-form';
import { register } from '@/actions/register';
import { AuthFormContent } from '@/components/elements/auth/auth-form-content';
import { Button, FormItem, Text } from '@/components/ui';
import { SocialBtns } from '../../social-btns';
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
    <AuthForm onFinish={handleRegister}>
      <AuthFormContent title={'Sign up'}>
        <SocialBtns />
        <Divider style={{ margin: 0 }}>or</Divider>
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
          <Input size={'large'} />
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
          <Password size={'large'} />
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

        <Flex justify={'space-between'} align={'center'}>
          <Text>Already have account?</Text>
          <Link href={'/'}>Log in</Link>
        </Flex>
      </AuthFormContent>
    </AuthForm>
  )
}