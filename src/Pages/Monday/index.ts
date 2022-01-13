import gql from "graphql-tag";

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
