'use client';

import * as z from 'zod';
import { FC, useState, useTransition } from 'react';
import { Alert, Checkbox, Flex, Input } from 'antd';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Text, FormItem, Button } from '@/components/ui';
import { AuthFormContent } from '@/components/elements';
import { AuthForm } from '../../auth-form';
import { LoginSchema } from '@/schemas';
import { login } from '@/actions/login';

const { Password } = Input;

type FormValuesProps = z.infer<typeof LoginSchema>;

export const LoginForm: FC = () => {
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const oauthError = searchParams.get('error') === 'OAuthAccountNotLinked'
    ? 'Email already taken!'
    : '';

  console.log(oauthError, 'oauthError');


  const handleSubmit = async (values: FormValuesProps) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values)
        .then(data => {
          setError(data?.error);
          setSuccess(data?.success);
        })
    });
  };

  return (
    <AuthForm onFinish={handleSubmit} >
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

        {!!error || !!oauthError && <Alert message={error || oauthError} type={'error'} showIcon />}
        {!!success && <Alert message={success} type={'success'} showIcon />}

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
