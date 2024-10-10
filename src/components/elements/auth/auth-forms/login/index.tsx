'use client';

import { FC, useEffect, useState } from 'react';
import { App, Checkbox, Divider, Flex, Input } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

import { Text, FormItem, Button } from '@/components/ui';
import { AuthFormContent } from '@/components/elements';
import { AuthForm } from '../../auth-form';
import { login } from '@/functions/login';

const { Password } = Input;

export const LoginForm: FC = () => {
  const { message } = App.useApp();
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const { data: session } = useSession()

  const userId = session?.user?.id as string;

  useEffect(() => {
    if (userId) {
      router.push(`/${userId}/workspace`);
    }
  }, [router, userId]);


  const handleSubmit = async (values: any) => {
    try {
      const result = await login(values, userId, hasError);

      if (result?.error) {
        setHasError(true);
        message.error(result?.error);
      } 
   
    } catch (error) {
      console.log(error, 'Login error');
    } finally {
      setHasError(false)
    }
  };

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: `${window.location.origin}/${userId}/dashboard` });
  };

  return (
    <AuthForm onFinish={handleSubmit}>
      <AuthFormContent title={'Log in'}>
        <Button
          text={'Sign in with Google'}
          type={'default'}
          onClick={handleGoogleSignIn}
          icon={<GoogleOutlined />}
          wide
         />

        <Divider>or</Divider>
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
