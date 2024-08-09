import { gql } from 'graphql-request';

export const getPrivacyPolicyPage = gql`
  query ($locale: I18NLocaleCode) {
    policyPage(locale: $locale) {
      data {
        attributes {
          page_title
          content
        }
      }
    }
  }
`;
