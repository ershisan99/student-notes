import React from 'react';
import { render } from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/ckyctpd3z0pfi01z8cqec4suh/master',
    cache: new InMemoryCache()
});

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);