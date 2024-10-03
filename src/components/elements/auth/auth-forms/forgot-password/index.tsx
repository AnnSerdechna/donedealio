'use client';

import { FC } from 'react';
import { Flex, Input } from 'antd';
import Link from 'next/link';

import { Form, FormItem, Button } from '@/components/ui';
import { AuthFormContent } from '@/components/elements';

export const ForgotPasswordForm :FC= () => {
  return (
    <Form>
      <AuthFormContent title={'Forgot password'}>
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

        <FormItem>
          <Button text={'Send'} htmlType={'submit'} />
        </FormItem>

        <Flex justify={'flex-end'} align={'center'} gap={16}>
          <Link href={'/auth/login'} style={{ fontSize: 16 }}>Log in</Link>
        </Flex>
      </AuthFormContent>
    </Form>
  )
}