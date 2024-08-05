import { gql } from 'graphql-request';

export const getSingleEventPageData = gql`
  query ($locale: I18NLocaleCode, $slug: String) {
    eventsPage(locale: $locale) {
      data {
        attributes {
          labels {
            id
            type_of_activity
            label_at_image
            filter_button_label
          }
        }
      }
    }
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
