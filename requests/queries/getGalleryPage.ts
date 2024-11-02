import { gql } from 'graphql-request';

export const getGalleryPage = gql`
  query ($locale: I18NLocaleCode) {
    galleryPage(locale: $locale) {
      data {
        attributes {
          page_title
        }
      }
    }
    galleryEvents(locale: $locale, sort: "id:desc", pagination: { limit: 100 }) {
      data {
        id
        attributes {
          title
          slug
          main_image {
            alt
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          gallery {
            id
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
