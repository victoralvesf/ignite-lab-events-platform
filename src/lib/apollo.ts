import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl9m2nr1x44rm01t94t4f31wp/master',
  cache: new InMemoryCache()
})