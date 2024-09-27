'use client';

import { Button, Flex, Form, Input, Typography } from 'antd';

import Link from 'next/link';

const { Item } = Form;
const { Password } = Input;
const { Title, Text } = Typography;


export const RegisterForm = () => {  
  return (
    <Form
      layout={'vertical'}
      style={{ width: '100%' }}
    >
      <Title style={{ textAlign: 'center', marginTop: 0 }}>Sign up</Title>
      <Item
        name={'firstName'}
        label={'First name'}
      >
        <Input size={'large'} />
      </Item>
      <Item
        name={'lastName'}
        label={'Last name'}
      >
        <Input size={'large'} />
      </Item>
      <Item
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
      </Item>
      <Item
        name={'password'}
        label={'Password'}
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
        name={'confirm'}
        label={'Confirm assword'}
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
        <Button 
          type={'primary'} 
          size={'large'} 
          htmlType={'submit'} 
          loading={false}
          style={{ width: '100%' }}
        >
          Sign up
        </Button>
      </Item>

      <Flex justify={'space-between'} align={'center'}>
        <Text>Already have account?</Text>
        <Link href={'/auth/login'} style={{ fontSize: 16 }}>Log in</Link>
      </Flex>
    </Form>
  )
}