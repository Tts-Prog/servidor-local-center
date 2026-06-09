'use client';

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react"
import { ReactNode } from "react";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  }),
});

export function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}