import { gql } from 'graphql-request';

export const getAllVacanciesSlugs = gql`
  query ($locale: I18NLocaleCode) {
    vacancies(locale: $locale, pagination: { limit: 100 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
