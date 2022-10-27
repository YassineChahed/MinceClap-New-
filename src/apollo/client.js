import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  //HttpLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

import { createUploadLink } from "apollo-upload-client";
import { REFRESH_TOKEN } from "../gql/Auth";
let apolloClient;

const refreshToken = () => {
  const actualRefreshToken = localStorage.getItem("refreshToken");
  if (actualRefreshToken !== null) {
    apolloClient
      .mutate({
        mutation: REFRESH_TOKEN,
        variables: {
          refreshToken: localStorage.getItem("refreshToken"),
        },
      })
      .then((result) => {
        localStorage.setItem(
          "accessToken",
          result.data.refreshToken.accessToken
        );
        return result.data.refreshToken.accessToken;
      })
      .catch((error) => {
        localStorage.clear();
        apolloClient.clearStore();
      });
  } else {
    localStorage.clear();
    apolloClient.clearStore();
  }
};

// const httpLink = new HttpLink({ uri: 'https://api.mineclap.com/graphql' })
// const uploadLink = createUploadLink({
//   uri: 'http://164.132.230.4:4040/graphql',
// })
//const uploadLink = createUploadLink({
//uri: 'http://localhost:4040/graphql',
//})
const uploadLink = createUploadLink({
  uri: "https://api.mineclap.com/graphql",
});
let authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("accessToken");
  if (token !== null) {
    operation.setContext({
      headers: {
        "access-token": token,
      },
    });
  } else {
    operation.setContext({
      headers: {},
    });
  }
  return forward(operation);
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "UNAUTHENTICATED":
            localStorage.removeItem("accessToken");
            operation.setContext({
              headers: {
                "access-token": refreshToken(),
              },
            });
            return forward(operation);
        }

        break;
      }
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);
// const defaultOptions = {
//   query: {
//     fetchPolicy: 'network-only',
//     errorPolicy: 'all',
//   },
//   mutate: {
//     errorPolicy: 'all',
//   },
// }
export const cache = new InMemoryCache();

apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, uploadLink]),
  cache: cache,
  // queryDeduplication: false,
  // defaultOptions,
});
export default apolloClient;
