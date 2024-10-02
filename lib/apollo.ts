import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  // uri: `http://localhost:3000/api/graphql`,
  // uri: `https://donedealio.vercel.app/api/graphql`,
  uri: process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_API_ROOT,
  cache: new InMemoryCache(),
});

export default apolloClient;