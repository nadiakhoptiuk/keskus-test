import { gql } from 'graphql-request';

export const getMetaData = (pageName: string) => gql`
  query ($locale: I18NLocaleCode) {
    ${pageName}(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
            keywords
          }
        }
      }
    }
  }
`;
