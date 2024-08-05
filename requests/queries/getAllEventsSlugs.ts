import { gql } from 'graphql-request';

export const getAllEventsSlugs = gql`
  query ($locale: I18NLocaleCode) {
    activities(locale: $locale, pagination: { limit: 100 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
