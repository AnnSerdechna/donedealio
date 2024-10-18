'use client';

import { Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import { verification } from '@/actions/verification';
import { AlertMessage } from '@/components/ui/alert-message';
import { MessageProps } from '@/types';
import { AuthCard } from '@/components/elements/auth/auth-card';

export const Verification: FC = () => {
  const [message, setMessage] = useState<MessageProps | null>(null);
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (!token) {
      setMessage({ status: 'error', content: 'Missing token!' });
      return;
    };

    verification(token)
      .then((data) => {
        setMessage(data)
      })
      .catch(() => {
        setMessage({ status: 'error', content: 'Something went wrong!' });
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit])

  return (
    <AuthCard
      title={'Verify email address'}
      description={''}
    >
      {
        !message
          ? <Spin />
          : <AlertMessage data={message} />
      }

      <Link href={'/auth/login'}>Log in</Link>
    </AuthCard>
  )
}