'use client';

import { Flex, Input } from 'antd';
import Link from 'next/link';

import { AuthFormContent } from '@/components/elements';
import { Form, FormItem, Text, Button } from '@/components/ui';

const { Password } = Input;

export const RegisterForm = () => {
  return (
    <Form>
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
          />
        </FormItem>

        <Flex justify={'space-between'} align={'center'}>
          <Text>Already have account?</Text>
          <Link href={'/auth/login'}>Log in</Link>
        </Flex>
      </AuthFormContent>
    </Form>
  )
}