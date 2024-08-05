import { gql } from 'graphql-request';

export const getNewsPage = gql`
  query ($locale: I18NLocaleCode) {
    newsPage(locale: $locale) {
      data {
        attributes {
          page_title
        }
      }
    }
    news(locale: $locale, pagination: { limit: 100 }) {
      data {
        id
        attributes {
          title
          slug
          date
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
          content
        }
      }
    }
  }
`;
