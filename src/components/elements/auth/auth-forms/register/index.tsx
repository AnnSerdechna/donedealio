'use client';

import { App, Flex, Input } from 'antd';
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react";
import { FC, useEffect } from 'react';
import bcrypt from 'bcryptjs';

import { AuthFormContent } from '@/components/elements';
import { FormItem, Text, Button } from '@/components/ui';
import { Role, useCreateOneUserMutation, UserCreateInput } from '@/graphql/types';
import { AuthForm } from '../../auth-form';
import { useRouter } from 'next/navigation';

const { Password } = Input;

export const RegisterForm: FC = () => {
  const {message} = App.useApp();
  const router = useRouter();
  const { data: session } = useSession();
  const [register, { loading }] = useCreateOneUserMutation();

  const userId = session?.user?.id;

  useEffect(() => {
    if (session?.user?.id) {
      router.push(`/${userId}/workspace`)
    }
  }, [session]);

  const onFinish = async (values: UserCreateInput) => {
    try {
      const hashedPassword = await bcrypt.hash(values.password, 10);

      const registerResult = await register({
        variables: {
          data: {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: hashedPassword,
            role: Role.Admin
          }
        }
      });
      
      const userId = registerResult?.data?.createOneUser?.id;

      const loginResult = await signIn('credentials', {
        redirect: true,
        callbackUrl: `${window.location.origin}/${userId}/dashboard`,
        email: values.email,
        password: values.password,
      });

      if (loginResult?.error) {
        message.error(loginResult?.error);
      }

      message.success('Register success');
    } catch (error) {
      console.log(error, 'Register error');
      message.error('Register failed');
    }
  }

  return (
    <AuthForm onFinish={onFinish}>
      <AuthFormContent title={'Sign up'}>
        <Flex align={'center'} gap={16}>
          <FormItem
            name={'firstName'}
            label={'First name'}
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
            name={'lastName'}
            label={'Last name'}
          >
            <Input size={'large'} />
          </FormItem>
        </Flex>
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
          label={'Confirm assword'}
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

        <FormItem>
          <Button
            text={'Sign in'}
            htmlType={'submit'}
            loading={loading}
            wide
          />
        </FormItem>

        <Flex justify={'space-between'} align={'center'}>
          <Text>Already have account?</Text>
          <Link href={'/auth/login'}>Log in</Link>
        </Flex>
      </AuthFormContent>
    </AuthForm>
  )
}