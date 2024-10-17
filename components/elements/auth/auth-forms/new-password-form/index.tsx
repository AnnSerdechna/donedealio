'use client';

import { Input } from 'antd';
import { FC, useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';

import { FormItem, Button, Form } from '@/components/ui';
import { AuthCard } from '@/components/elements/auth/auth-card';
import { newPassword } from '@/actions/new-password';
import { NewPasswordValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';
import { AlertMessage } from '@/components/ui/alert-message';

const { Password } = Input;

export const NewPasswordForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<MessageProps | null>(null);
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const handleSubmit = async (values: NewPasswordValuesProps) => {
    setMessage(null);

    startTransition(() => {
      newPassword(values, token)
        .then((data) => {
          setMessage(data)
        })
    });
  };

  return (
    <AuthCard
      title={'New password'}
      description={'Set new password and'}
      backLinkUrl={'/auth/login'}
      backLinkLabel={'Sign in'}
    >
      <Form onFinish={handleSubmit}>
        <FormItem
          name={'password'}
          label={'New password'}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 6,
              message: 'Min 6 characters required!',
            }
          ]}
          hasFeedback
        >
          <Password size={'large'} placeholder={'******'} />
        </FormItem>

        <FormItem
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Password size={'large'} placeholder={'******'} />
        </FormItem>

        <AlertMessage data={message} />

        <FormItem>
          <Button text={'Save'} htmlType={'submit'} loading={isPending} wide />
        </FormItem>
      </Form>
    </AuthCard>
  )
};