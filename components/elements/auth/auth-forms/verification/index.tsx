'use client';

import { verification } from '@/actions/verification';
import { Alert, Flex, Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const Verification = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (!token) {
      setError('Missing token!');
      return;
    };
    
    verification(token)
      .then(data => {
        setError(data?.error);
        setSuccess(data?.success);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit])

  return (
    <Flex vertical>
      {!error && !success && <Spin />}
      {!!error && <Alert message={error} type={'error'} showIcon />}
      {!!success && <Alert message={success} type={'success'} showIcon />}
    </Flex>
  )
}