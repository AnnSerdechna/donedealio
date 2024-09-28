'use client';

import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Item } = Form;
const { Password } = Input;
const { Title, Text } = Typography;

export const LoginForm = () => {
  const router = useRouter();

  const userId = '1';

  return (
    <Form 
      layout={'vertical'} 
      style={{width: '100%'}}
      onFinish={() => {
        router.push(`/${userId}/dashboard`)
      }}
    >
      <Title style={{textAlign: 'center', marginTop: 0}}>Log in</Title>

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

      <Item>
        <Flex justify={'space-between'} align={'center'}>
          <Form.Item name={'remember'} valuePropName={'checked'} noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link href={'/auth/forgot-password'} style={{fontSize: 16}}>Forgot password</Link>
        </Flex>
      </Item>

      <Item>
        <Button type={'primary'} size={'large'} htmlType={'submit'} style={{width: '100%'}}>Log in</Button>
      </Item>

      <Flex justify={'space-between'} align={'center'}>
        <Text>{"Haven't account yet?"}</Text>
        <Link href={'/auth/register'} style={{fontSize: 16}}>Sign up</Link>
      </Flex>
    </Form>
  )
}