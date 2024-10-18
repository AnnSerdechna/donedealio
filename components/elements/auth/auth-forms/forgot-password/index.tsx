'use client';

import { FC, useState, useTransition } from 'react';
import { Flex, Input, Form as AntForm } from 'antd';

import { FormItem, Button, Form } from '@/components/ui';
import { AuthCard } from '@/components/elements/auth/auth-card';
import { ForgotPasswordValuesProps } from '@/schemas/types';
import { forgotPassword } from '@/actions/forgot-password';
import { MessageProps } from '@/types';
import { AlertMessage } from '@/components/ui/alert-message';

export const ForgotPasswordForm: FC = () => {
  const [form] = AntForm.useForm();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<MessageProps | null>(null);

  const handleSubmit = async (values: ForgotPasswordValuesProps) => {
    setMessage(null);

    startTransition(() => {
      forgotPassword(values)
        .then((data) => {
          setMessage(data)
        }).finally(() => {
          form.resetFields()
        });
    });
  };

  return (
    <AuthCard
      title={'Forgot password?'}
      description={"We'll send new password link to email"}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Flex gap={24} vertical> 
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
            <Input type={'email'} size={'large'} placeholder={'email@example.com'} />
          </FormItem>

          <AlertMessage data={message} />

          <FormItem>
            <Button text={'Send'} htmlType={'submit'} loading={isPending} wide />
          </FormItem>
        </Flex>
      </Form>
    </AuthCard>
  )
}