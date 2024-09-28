'use client';

import { Button, Form, Input, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Item } = Form;
const { Password } = Input;
const { Title } = Typography;

export const ConfirmPasswordForm = () => {
  const router = useRouter();

  return (
    <Form 
      layout={'vertical'} 
      style={{width: '100%'}}
      onFinish={() => {
        router.push('/auth/login')
      }}
    >
      <Title style={{textAlign: 'center', marginTop: 0}}>Confirm password</Title>

      <Item
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
      </Item>

      <Item
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
      </Item>

      <Item>
        <Button type={'primary'} size={'large'} htmlType={'submit'} style={{width: '100%'}}>Save</Button>
      </Item>
    </Form>
  )
};