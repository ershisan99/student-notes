import gql from "graphql-tag";

export const MONDAY_QUERY = gql`
  query {
    mondays {
      mondayItem {
        raw
      }
    }
  }
`;
