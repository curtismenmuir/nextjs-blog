import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const GATEWAY_URL = "https://hiit-ae-test.nw.r.appspot.com/query";

export async function executeMutation(mutation) {
  try {
    const link = new HttpLink({
      uri: GATEWAY_URL,
    });

    const cache = new InMemoryCache();
    const client = new ApolloClient({
      link: link,
      cache: cache,
    });
    return await client.mutate({
      mutation: mutation,
    });
  } catch (error) {
    switch (error.graphQLErrors[0].message) {
      case "Error: Invalid Password":
        return "Invalid Password";
      default:
        return "Invalid Request";
    }
  }
}
