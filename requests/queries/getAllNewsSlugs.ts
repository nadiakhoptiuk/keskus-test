import { gql } from 'graphql-request';

export const getAllNewsSlugs = gql`
  query ($locale: I18NLocaleCode) {
    news(locale: $locale, pagination: { limit: 100 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
