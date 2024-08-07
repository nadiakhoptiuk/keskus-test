import { gql } from 'graphql-request';

export const getHomePage = gql`
  query ($locale: I18NLocaleCode) {
    homePage(locale: $locale) {
      data {
        attributes {
          page_title
          hero_text
          hero_button
          financial_support_subtitle
          financial_support_text
          announcement_subtitle
          announcement_button_all_events
        }
      }
    }
    tabPanels(locale: $locale, pagination: { limit: 10 }) {
      data {
        id
        attributes {
          payment_system
          tab_clipboard {
            id
            title
            content
          }
        }
      }
    }
    activities(
      locale: $locale
      pagination: { limit: 100 }
      filters: { type: { eq: "irregular" } }
    ) {
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
          slug
        }
      }
    }
  }
`;
