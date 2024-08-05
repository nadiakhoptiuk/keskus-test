import { gql } from 'graphql-request';

export const getEventsPage = gql`
  query ($locale: I18NLocaleCode) {
    eventsPage(locale: $locale) {
      data {
        attributes {
          page_title
          labels {
            id
            type_of_activity
            label_at_image
            filter_button_label
          }
        }
      }
    }
    activities(locale: $locale, pagination: { limit: 100 }) {
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
        }
      }
    }
  }
`;
