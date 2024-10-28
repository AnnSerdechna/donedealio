import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000/api/graphql' 
  : `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`

const apolloClient = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default apolloClient;