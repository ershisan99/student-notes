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

export const INTRODUCTION_BLOCKS_QUERY = gql`
  query {
    coverImage(where: { id: "ckyd70nyoc74v0d496c044hu2" }) {
      coverImage {
        url
      }
    }
    page: introductionBlocksConnection {
      edges {
        node {
          id
        }
      }
    }
    introductionBlocks {
      adviseText {
        raw
      }
    }
  }
`;

export const TUESDAY_QUERY = gql`
  query {
    tuesdays {
      tuesdayItem {
        raw
      }
    }
  }
`;

export const WEDNESDAY_QUERY = gql`
  query {
    wednesdays {
      wednesdayItem {
        raw
      }
    }
  }
`;

export const DESIGN_QUERY = gql`
  query {
    designs {
      designItem {
        raw
      }
    }
  }
`;

export const JSTS_QUERY = gql`
  query {
    vanillaPageItems {
      vanillaPageItem {
        raw
      }
    }
  }
`;

export const REACT_QUERY = gql`
  query {
    reactPageItems {
      reactPageItem {
        raw
      }
    }
  }
`;
