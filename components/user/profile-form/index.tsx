'use client';

import { Flex, Form as AntForm, Input, Col, Grid, Switch, Upload, App } from 'antd';
import { FC, Fragment, useTransition } from 'react';
import { useSession } from 'next-auth/react';

import { Button, Form, FormItem, Text } from '@/components/ui';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { profile } from '@/actions/profile';
import { ProfileValuesProps } from '@/schemas/types';
import { useUploadFile } from '@/hooks/useUploadFiles';
import ImgCrop from 'antd-img-crop';

const { Password } = Input;
const { useBreakpoint } = Grid;

export const ProfileForm: FC = () => {
  const user = useCurrentUser();
  const [form] = AntForm.useForm();
  const { update } = useSession();
  const { message } = App.useApp()
  const screens = useBreakpoint();
  const [isPending, startTransition] = useTransition();
  const { uploadProps, uploadedFile, handleUploadFile } = useUploadFile();

  const onSubmit = async (values: ProfileValuesProps) => {
    try {
      const file = await handleUploadFile();

      startTransition(() => {
        profile({
          ...values,
          image: file?.url || uploadedFile?.url || null,
          imageId: file?.id || uploadedFile?.id || null,
        })
          .then((data) => {
            if (data?.status === 'success') {
              message.success(data?.content);
              update();
            }

            if (data?.status === 'error') {
              message.error(data?.content);
            }
          })
          .catch(() => {
            message.error('Profile update failed!');
          })
      });
    } catch {
      message.error('Error while saving the profile!');
    }
  };

  return (
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
                  labelCol={{ flex: 0.9 }}
                  wrapperCol={{ flex: 0.1 }}
                  labelAlign="left"
                  colon={false}
                  label={(
                    <Flex vertical>
                      <Text strong>Two factor authentification</Text>
                      <Text>Enable 2FA for your account</Text>
                    </Flex>
                  )}
                  valuePropName={'checked'}
                  style={{ padding: '6px 11px', border: '1px solid #d9d9d9', borderRadius: '8px' }}
                >
                  <Switch defaultChecked />
                </FormItem>
              </Fragment>
            )}

            <FormItem>
              <Button
                text={'Save'}
                htmlType={'submit'}
                loading={isPending}
                wide
              />
            </FormItem>
          </Flex>
        </Col>
        <Col
          xs={{ span: 24, offset: 0, order: 1 }}
          lg={{ span: 11, offset: 2, order: 2 }}
        >
          <FormItem>
            <ImgCrop rotationSlider>
              <Upload {...uploadProps}>
                {'+ Upload'}
              </Upload>
            </ImgCrop>
          </FormItem>
        </Col>
      </Flex>
    </Form>
  )
}
