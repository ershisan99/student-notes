import gql from 'graphql-tag'

export const MONDAY_QUERY = gql`
   query {
      mondays {
         mondayItem {
            raw
            text
         }
      }
   }
`

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
            text
         }
      }
   }
`

export const TUESDAY_QUERY = gql`
   query {
      tuesdays {
         tuesdayItem {
            raw
            text
         }
      }
   }
`

export const WEDNESDAY_QUERY = gql`
   query {
      wednesdays {
         wednesdayItem {
            raw
            text
         }
      }
   }
`

export const DESIGN_QUERY = gql`
   query {
      designs {
         designItem {
            raw
            text
         }
      }
   }
`

export const JSTS_QUERY = gql`
   query {
      vanillaPageItems {
         vanillaPageItem {
            raw
            text
         }
      }
   }
`

export const REACT_QUERY = gql`
   query {
      reactPageItems {
         reactPageItem {
            raw
            text
         }
      }
   }
`

export const GIT_QUERY = gql`
   query {
      gitItems {
         gitItem {
            raw
            text
         }
      }
   }
`

export const INFO_QUERY = gql`
   query {
      additionalInfoItems {
         additionalInfoItem {
            raw
            text
         }
      }
   }
`

export const ALL_QUERY = gql`
   query {
      mondays {
         mondayItem {
            raw
         }
      }
      introductionBlocks {
         adviseText {
            raw
         }
      }
      tuesdays {
         tuesdayItem {
            raw
         }
      }
      wednesdays {
         wednesdayItem {
            raw
         }
      }
      designs {
         designItem {
            raw
         }
      }
      vanillaPageItems {
         vanillaPageItem {
            raw
         }
      }
      gitItems {
         gitItem {
            raw
         }
      }
   }
`
