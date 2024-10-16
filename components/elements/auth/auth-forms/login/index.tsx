'use client';

import * as z from 'zod';
import { FC, useState, useTransition } from 'react';
import { Checkbox, Flex, Input } from 'antd';
import Link from 'next/link';

import { Text, FormItem, Button } from '@/components/ui';
import { AuthFormContent } from '@/components/elements';
import { AuthForm } from '../../auth-form';
import { LoginSchema } from '@/auth/schemas';
import { login } from '@/actions/login';

const { Password } = Input;

type FormValuesProps = z.infer<typeof LoginSchema>;

export const LoginForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');

  const handleSubmit = async (values: FormValuesProps) => {
    setError('');

    startTransition(() => {
      login(values)
      .then(data => {
        setError(data?.error)
      })
    });
  };

  return (
    <AuthForm onFinish={handleSubmit} error={error}>
      <AuthFormContent title={'Log in'}>
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
          <Flex justify={'space-between'} align={'center'}>
            <FormItem name={'remember'} valuePropName={'checked'} noStyle>
              <Checkbox>Remember me</Checkbox>
            </FormItem>
            <Link href={'/auth/forgot-password'}>Forgot password</Link>
          </Flex>
        </FormItem>

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
