'use client';

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react"
import { ReactNode } from "react";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8080/graphql",
  }),
});

export function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}