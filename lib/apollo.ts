import { domain } from '@/variables';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: `${domain}/api/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;