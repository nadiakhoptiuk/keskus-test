import { gql } from 'graphql-request';

export const getVacanciesPage = gql`
  query ($locale: I18NLocaleCode) {
    vacanciesPage(locale: $locale) {
      data {
        attributes {
          page_title
          description
          link_to_apply_label
          link_to_read_more_label
        }
      }
    }
    vacancies(locale: $locale, pagination: { limit: 100 }) {
      data {
        id
        attributes {
          title
          slug
          short_description
          link_to_apply
        }
      }
    }
  }
`;
