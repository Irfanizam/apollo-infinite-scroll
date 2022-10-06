
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

//single endpoint
//query once,then memorized by cache
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          keyArgs: [],
          merge(existing, incoming, { args: { offset = 0 } }: any) {
            if (!existing) return incoming;
            const merged = existing.results.slice(0);
            for (let i = 0; i < incoming.results.length; ++i) {
              merged[offset + i] = incoming.results[i];
            }

            return { ...existing, results: merged };
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache,
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
)