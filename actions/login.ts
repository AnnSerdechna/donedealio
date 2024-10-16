'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/auth/routes';
import { LoginSchema } from '@/auth/schemas';

type LoginValuesProps = z.infer<typeof LoginSchema>;

export const login = async (values: LoginValuesProps) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields!'}
  }
  
  const { email, password } = validateFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch(error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!'}
        default: 
          return { error: 'Something went wrong!' }
      }
    }

    throw error;
  };

  return { success: 'User loggined!' };
}