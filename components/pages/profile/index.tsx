'use client';

import { Flex, Form as AntForm, Input, Col } from 'antd';
import { useEffect } from 'react';

import { Button, Form, FormItem } from '@/components/ui';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const { Password } = Input;

export const ProfilePage = () => {
  const [form] = AntForm.useForm();
  const user = useCurrentUser();

  useEffect(() => {
    form.setFieldsValue({
      name: user?.name,
      email: user?.email
    })
  }, [form, user]);

  return (
    <Form form={form}>
      <Flex>
        <Col span={11}>
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
              name={'confirm'}
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

            {/* <AlertMessage data={message} /> */}

            <FormItem>
              <Button
                text={'Sign up'}
                htmlType={'submit'}
                wide
              />
            </FormItem>
          </Flex>
        </Col>
        <Col offset={2} span={11}>
          {/* Upload */}
        </Col>
      </Flex>
    </Form>
  )
}