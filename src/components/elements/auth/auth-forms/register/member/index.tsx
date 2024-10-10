'use client';

import { FC } from 'react';

import { Role } from '@/graphql/types';
import { useRegister } from '@/hooks/useRegister';
import { AuthForm } from '../../../auth-form';
import { RegisterFormContent } from '../form-content';

export const RegisterForm: FC = () => {
  const { loading, handleRegister } = useRegister(Role.Member)

  return (
    <AuthForm onFinish={handleRegister}>
      <RegisterFormContent loading={loading} />
    </AuthForm>
  )
}