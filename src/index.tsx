import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckyctpd3z0pfi01z8cqec4suh/master",
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
