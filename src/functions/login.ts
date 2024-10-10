import { signIn } from 'next-auth/react';

export const login = async (values: { email: string, password: string }, userId: string, hasError: boolean) => {
  return await signIn('credentials', {
    redirect: hasError,
    email: values.email,
    password: values.password,
    callbackUrl: `${window.location.origin}/${userId}/dashboard`,
  });
};