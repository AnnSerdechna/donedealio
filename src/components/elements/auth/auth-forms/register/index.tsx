'use client';

import { Flex, Input, message } from 'antd';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { FC, Fragment } from 'react';
import bcrypt from 'bcryptjs';

import { AuthFormContent } from '@/components/elements';
import { Form, FormItem, Text, Button } from '@/components/ui';
import { Role, useCreateOneUserMutation, UserCreateInput } from '@/graphql/types';

const { Password } = Input;

export const RegisterForm: FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [register, { loading }] = useCreateOneUserMutation();

  const onFinish = async (values: UserCreateInput) => {
    try {
      const hashedPassword = await bcrypt.hash(values.password, 10);

      await register({
        variables: {
          data: {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: hashedPassword,
            role: Role.Admin
          }
        }
      })
      
      const result = await signIn('credentials', {
        redirect: false,
        callbackUrl: `${window.location.origin}/dashboard`,
        email: values.email,
        password: values.password,
      });

      if (result?.error) {
        messageApi.error(result?.error);
      }

      messageApi.success('Register success');
    } catch (error) {
      console.log(error, 'Register error');
      messageApi.error('Register failed');
    }
  }

  return (
    <Fragment>
      {contextHolder}
      <Form onFinish={onFinish}>
        <AuthFormContent title={'Sign up'}>
          <FormItem
            name={'firstName'}
            label={'First name'}
          >
            <Input size={'large'} />
          </FormItem>
          <FormItem
            name={'lastName'}
            label={'Last name'}
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
            />
          </FormItem>

          <Flex justify={'space-between'} align={'center'}>
            <Text>Already have account?</Text>
            <Link href={'/auth/login'}>Log in</Link>
          </Flex>
        </AuthFormContent>
      </Form>
    </Fragment>
  )
}