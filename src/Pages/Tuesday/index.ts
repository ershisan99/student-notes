import gql from "graphql-tag";

export const TUESDAY_QUERY = gql`
  query {
    tuesdays {
      tuesdayItem {
        raw
      }
    }
  }
`;
