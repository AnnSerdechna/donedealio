'use client';

import { FC, Fragment } from 'react';
import { Checkbox, Flex, Input, message } from 'antd';
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react";

import { Form, Text, FormItem, Button } from '@/components/ui';
import { AuthFormContent } from '@/components/elements';

const { Password } = Input;

export const LoginForm: FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { data: session } = useSession()

  const handleSubmit = async (values: any) => {
    try {
      const result = await signIn('credentials', {
        redirect: true,
        email: values.email,
        password: values.password,
        callbackUrl: `${window.location.href}/${session?.user?.id}/dashboard`,
      });

      if (result?.error) {
        messageApi.error(result?.error);
      } 
    } catch (error) {
      console.log(error, 'Login error');
    }
  };

  return (
    <Fragment>
      {contextHolder}
      <Form onFinish={handleSubmit}>
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
            />
          </FormItem>

          <Flex justify={'space-between'} align={'center'}>
            <Text>{"Haven't account yet?"}</Text>
            <Link href={'/auth/register'}>Sign up</Link>
          </Flex>
        </AuthFormContent>
      </Form>
    </Fragment>
  )
}
