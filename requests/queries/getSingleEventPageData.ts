import { gql } from 'graphql-request';

export const getSingleEventPageData = gql`
  query ($locale: I18NLocaleCode, $slug: String) {
    activities(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          description
          image {
            alt
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
          slug
          registration_url
        }
      }
    }
  }
`;
