'use client';

import { FC } from 'react';
import { Flex, Input } from 'antd';
import Link from 'next/link';

import { FormItem, Button } from '@/components/ui';
import { AuthFormContent } from '@/components/elements';
import { AuthForm } from '../../auth-form';

export const ForgotPasswordForm :FC= () => {
  return (
    <AuthForm>
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
          <Button text={'Send'} htmlType={'submit'} wide />
        </FormItem>

        <Flex justify={'flex-end'} align={'center'} gap={16}>
          <Link href={'/auth/login'} style={{ fontSize: 16 }}>Log in</Link>
        </Flex>
      </AuthFormContent>
    </AuthForm>
  )
}