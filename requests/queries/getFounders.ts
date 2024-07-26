import { gql } from 'graphql-request';

export const getFounders = gql`
  query ($locale: I18NLocaleCode) {
    founders(locale: $locale, pagination: { limit: 100 }) {
      data {
        id
        attributes {
          name
          description
          email
          phone_displaying
          phone_link
          photo {
            alt
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
