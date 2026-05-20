import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/graphql",
  }),
});