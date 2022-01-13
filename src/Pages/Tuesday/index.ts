import gql from "graphql-tag";

export const MONDAY_QUERY = gql`
  query {
    monday(where: { id: "ckyd96pdkemi40d49szh5xv43" }) {
      mondayItem {
        raw
      }
    }
  }
`;
