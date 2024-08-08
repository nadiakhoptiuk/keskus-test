import { gql } from 'graphql-request';

export const getSingleVacancy = gql`
  query ($locale: I18NLocaleCode, $slug: String) {
    vacanciesPage(locale: $locale) {
      data {
        attributes {
          link_to_apply_label
        }
      }
    }
    vacancies(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          short_description
          long_description
          link_to_apply
        }
      }
    }
  }
`;
