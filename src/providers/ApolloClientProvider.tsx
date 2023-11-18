import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

const API_KEY = process.env.EXPO_PUBLIC_STEPZEN_API_KEY;
// console.log(API_KEY)

const client = new ApolloClient({
  uri: 'https://santacruzdebezana.stepzen.net/api/kissing-dog/__graphql',
  headers: {
    Authorization:
      `apikey ${API_KEY}`,
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;