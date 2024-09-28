'use client';

import { Button, Flex, Form, Input, Typography } from 'antd';
import Link from 'next/link';

const { Item } = Form;
const { Title } = Typography;

export const ForgotPasswordForm = () => {
  return (
    <Form layout={'vertical'} style={{width: '100%'}}>
      <Title style={{textAlign: 'center', marginTop: 0}}>Forgot password</Title>

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

      <Item>
        <Button type={'primary'} size={'large'} htmlType={'submit'} style={{width: '100%'}}>Send</Button>
      </Item>
    
      <Flex justify={'flex-end'} align={'center'} gap={16}>
        <Link href={'/auth/login'} style={{fontSize: 16}}>Log in</Link>
      </Flex>
    </Form>
  )
}