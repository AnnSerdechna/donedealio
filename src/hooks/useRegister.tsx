import { App, Flex } from 'antd';
import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';

import { Role, useCreateOneUserMutation, UserCreateInput } from '@/graphql/types';
import { useRouter } from 'next/navigation';
import { login } from '@/functions/login';

export const useRegister = (role: Role) => {
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
      const hashedPassword = await bcrypt.hash(values.password, 10);

      const registerResult = await register({
        variables: {
          data: {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: hashedPassword,
            role
          }
        }
      });

      const userId = registerResult?.data?.createOneUser?.id as string;

      const loginResult = await login(values, userId, hasError)

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

  return { loading, handleRegister }
}