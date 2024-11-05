import { gql } from 'graphql-request';

export const getSinglePageMetaData = (
  pageName: string,
  chapterName: string,
  imageName: string,
) => gql`
  query ($locale: I18NLocaleCode, $slug: String) {
   commonData: ${pageName}(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            keywords
          }
        }
      }
    }
  singlePageData: ${chapterName}(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          ${imageName} {
            alt
            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;
