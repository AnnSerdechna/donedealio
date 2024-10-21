'use client';

import { Flex, Form as AntForm, Input, Col, Grid, Switch } from 'antd';
import { Fragment, useState, useTransition } from 'react';
import { useSession } from 'next-auth/react';

import { Button, Form, FormItem, Text, VSpace } from '@/components/ui';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { UploadPhoto } from './upload-photo';
import { ContentWrap } from '@/components/layout/tasks/content-wrap';
import { MessageProps } from '@/types';
import { profile } from '@/actions/profile';
import { ProfileValuesProps } from '@/schemas/types';
import { AlertMessage } from '@/components/ui/alert-message';

const { Password } = Input;
const { useBreakpoint } = Grid;

export const ProfilePage = () => {
  const [form] = AntForm.useForm();
  const user = useCurrentUser();
  const screens = useBreakpoint();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<MessageProps | null>(null);

  const onSubmit = async (values: ProfileValuesProps) => {
    startTransition(() => {
      profile({ ...values })
        .then((data) => {
          setMessage(data);
          update();
        })
        .catch(() => {
          setMessage({ status: 'error', content: 'Something went wrong!' });
        });
    });
    setMessage(null);
  };

  return (
    <ContentWrap title={'Profile'}>
      <Form 
        form={form} 
        onFinish={onSubmit}
        initialValues={{
          name: user.name || undefined,
          email: user?.email || undefined,
          password: undefined,
          newpasswod: undefined,
          isTwoFactorEnable: user.isTwoFactorEnable
        }}
        >
        <Flex wrap={!screens.lg}>
          <Col 
            xs={{ span: 24, order: 2 }}
            lg={{ span: 11, order: 1 }}
          >
            <Flex vertical>
              <FormItem
                name={'name'}
                label={'Name'}
              >
                <Input size={'large'} placeholder={'Your name'} />
              </FormItem>

              {!user.isOAuth && (
                <Fragment>
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
                  >
                    <Password size={'large'} placeholder={'******'} />
                  </FormItem>

                  <FormItem
                    name={'newPassword'}
                    label={'New password'}
                  >
                    <Password size={'large'} placeholder={'******'} />
                  </FormItem>

                  <FormItem
                    name={'confirmPassword'}
                    label={'Confirm new password'}
                    dependencies={['newPassword']}
                    rules={[
                      ({ getFieldValue }) => ({
                        validator: (_, value) => {
                          if (!value || getFieldValue('newPassword') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Password size={'large'} placeholder={'******'} />
                  </FormItem>

                  <FormItem 
                    name={'isTwoFactorEnable'}
                    layout={'horizontal'} 
                    labelCol={{flex: 0.9 }}
                    wrapperCol={{ flex: 0.1}}
                    labelAlign="left"
                    colon={false}
                    label={(
                      <Flex vertical>
                        <Text strong>Two factor authentification</Text>
                        <Text>Enable 2FA for your account</Text>
                      </Flex>
                    )}
                    valuePropName={'checked'}
                    style={{padding: '6px 11px', border: '1px solid #d9d9d9', borderRadius: '8px'}}
                  >
                    <Switch defaultChecked />
                  </FormItem>
                </Fragment>
              )}

              <VSpace size={24}>
                <AlertMessage data={message} />

                <FormItem>
                  <Button
                    text={'Save'}
                    htmlType={'submit'}
                    loading={isPending}
                    wide
                  />
                </FormItem>
              </VSpace>
            </Flex>
          </Col>
          <Col 
            xs={{ span: 24, offset: 0, order: 1 }} 
            lg={{ span: 11, offset: 2, order: 2 }}
          >
            <FormItem>
              <UploadPhoto form={form} />
            </FormItem>
          </Col>
        </Flex>
      </Form>
    </ContentWrap>
  )
}
