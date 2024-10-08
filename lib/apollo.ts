import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql` || 
    `${process.env.NEXT_PUBLIC_API_ROOT}/api/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;