'use client';

import { FC, useEffect, useState } from 'react';

import { Role, useCreateOneUserMutation, UserCreateInput } from '@/graphql/types';
import { AuthForm } from '../../../auth-form';
import { RegisterFormContent } from '../form-content';
import bcrypt from 'bcryptjs';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { App } from 'antd';
import prisma from '../../../../../../../lib/prisma';

export const RegisterForm: FC = () => {
  const { message } = App.useApp();
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const [register, { loading }] = useCreateOneUserMutation();

  const userId = session?.user?.id;

  useEffect(() => {
    if (userId) {
      router.push(`/${userId}/workspace`);
    }
  }, [router, userId]);

  const handleRegister = async (values: UserCreateInput) => {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email: values.email },
      });

      if (existingUser) {
        message.error('User with such email already exists!');
        return;
      }

      const hashedPassword = await bcrypt.hash(values.password, 10);

      const registerResult = await register({
        variables: {
          data: {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: hashedPassword,
            role: Role.Admin
          }
        }
      });

      const userId = registerResult?.data?.createOneUser?.id as string;

      const loginResult = await signIn('credentials', {
        redirect: hasError,
        email: values.email,
        password: values.password,
        callbackUrl: `${window.location.origin}/${userId}/dashboard`,
      });

      if (loginResult?.error) {
        setHasError(true)
        message.error('User with sux=ch email already exist!');
      }

      message.success('Register success');
    } catch (error) {
      console.log(error, 'Register error');
      message.error('Register failed');
    } finally {
      setHasError(false)
    }
  };

  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl: `${window.location.origin}/${userId}/dashboard` });
  };

  return (
    <AuthForm onFinish={handleRegister}>
      <RegisterFormContent loading={loading} onGoogleSignIn={handleGoogleSignUp} />
    </AuthForm>
  )
}