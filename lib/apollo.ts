import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: `${window.location.origin}/api/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;