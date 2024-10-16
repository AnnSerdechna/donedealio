'use client';

import * as z from 'zod';
import { FC, useState, useTransition } from 'react';

import { RegisterFormContent } from './form-content';
import { AuthForm } from '../../auth-form';
import { RegisterSchema } from '@/auth/schemas';
import { register } from '@/actions/register';


type FormValuesProps = z.infer<typeof RegisterSchema>;

export const RegisterForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');

  const handleRegister = async (values: FormValuesProps) => {
    setError('');

    startTransition(() => {
      register(values)
        .then(data => {
          setError(data?.error)
        })
    });
  };


  return (
    <AuthForm onFinish={handleRegister} error={error}>
      <RegisterFormContent loading={isPending} />
    </AuthForm>
  )
}