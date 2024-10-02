'use client';

import { Input } from 'antd';
import { FC } from 'react';

import { AuthFormContent } from '@/components/elements';
import { Form, FormItem, Button } from '@/components/ui';

const { Password } = Input;

export const ConfirmPasswordForm: FC = () => {
  return (
    <Form>
      <AuthFormContent title={'Confirm password'}>
        <FormItem
          name={'password'}
          label={'New password'}
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
          name="confirm"
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
          <Password size={'large'} />
        </FormItem>

        <FormItem>
          <Button text={'Save'} htmlType={'submit'} />
        </FormItem>
      </AuthFormContent>
    </Form>
  )
};