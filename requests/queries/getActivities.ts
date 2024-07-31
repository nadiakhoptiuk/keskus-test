import { gql } from 'graphql-request';

export const getActivities = gql`
  query {
    activities {
      data {
        id
        attributes {
          title
          description
          image {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          type
          activity_type {
            __typename
            ... on ComponentActivitiesRegularActivity {
              id
              schedule
            }
            ... on ComponentActivitiesIrregularActivities {
              id
              date
            }
          }
        }
      }
    }
  }
`;
