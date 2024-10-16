'use client';

import * as z from 'zod';
import { FC, useState, useTransition } from 'react';
import { Alert, Flex, Input } from 'antd';
import Link from 'next/link';

import { AuthForm } from '@/components/elements/auth/auth-form';
import { RegisterSchema } from '@/auth/schemas';
import { register } from '@/actions/register';
import { AuthFormContent } from '@/components/elements/auth/auth-form-content';
import { Button, FormItem, Text } from '@/components/ui';


const { Password } = Input;

type FormValuesProps = z.infer<typeof RegisterSchema>;

export const RegisterForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const handleRegister = async (values: FormValuesProps) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      register(values)
        .then(data => {
          setError(data?.error);
          setSuccess(data?.success);
        })
    });
  };


  return (
    <AuthForm onFinish={handleRegister}>
      <AuthFormContent title={'Sign up'}>
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

        {!!error && <Alert message={error} type={'error'} showIcon />}

        {!!success && <Alert message={success} type={'success'} showIcon />}

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