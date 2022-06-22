import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4owqtp51bb001xs8v1l1qw8/master',
  cache: new InMemoryCache(),
});
