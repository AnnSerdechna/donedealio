'use client';

import { FC, useState, useTransition } from 'react';
import { Flex, Input, Form as AntForm } from 'antd';

import { register } from '@/actions/register';
import { Button, Form, FormItem } from '@/components/ui';
import { RegisterValuesProps } from '@/schemas/types';
import { AlertMessage } from '@/components/elements/alert-message';
import { MessageProps } from '@/types';

const { Password } = Input;

export const RegisterForm: FC = () => {
  const [form] = AntForm.useForm();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<MessageProps | null>(null);

  const handleRegister = async (values: RegisterValuesProps) => {
    setMessage(null);
    console.log(values, 'VALS');


    startTransition(() => {
      register(values)
        .then((data) => {
          setMessage(data)
          form.resetFields()
        })
    });
  };

  return (
    <Form form={form} onFinish={handleRegister}>
      <Flex gap={24} vertical>
        <FormItem
          name={'name'}
          label={'Name'}
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input size={'large'} placeholder={'Your name'} />
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
          <Input type={'email'} size={'large'} placeholder={'email@example.com'} />
        </FormItem>
        <FormItem
          name={'password'}
          label={'Password'}
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
          name={'confirmPassword'}
          label={'Confirm password'}
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
          <Password size={'large'} placeholder={'******'} />
        </FormItem>

        <AlertMessage data={message} />

        <FormItem>
          <Button
            text={'Sign up'}
            htmlType={'submit'}
            loading={isPending}
            wide
          />
        </FormItem>
      </Flex>
    </Form>
  )
}