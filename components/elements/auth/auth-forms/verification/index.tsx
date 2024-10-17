'use client';

import { Flex, Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';

import { verification } from '@/actions/verification';
import { AlertMessage } from '@/components/ui/alert-message';
import { MessageProps } from '@/types';

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
    <Flex vertical>
      {
        !message 
          ? <Spin /> 
          : <AlertMessage data={message} />
      }
    </Flex>
  )
}