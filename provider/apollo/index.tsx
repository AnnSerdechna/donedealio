'use client';

import { PropsWithChildren, FC } from 'react';
import { ApolloProvider as ApolloClientProvider } from '@apollo/client';

import apolloClient from '../../../lib/apollo';

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => {

  return (
    <ApolloClientProvider client={apolloClient}>{children}</ApolloClientProvider>
  );
};

