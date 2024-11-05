import { gql } from 'graphql-request';

export const getSinglePageMetaDataWithoutImage = (pageName: string, chapterName: string) => gql`
  query ($locale: I18NLocaleCode, $slug: String) {
   commonData: ${pageName}(locale: $locale) {
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
  singlePageData: ${chapterName}(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;
