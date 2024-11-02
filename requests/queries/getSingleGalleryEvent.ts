import { gql } from 'graphql-request';

export const getSingleGalleryEvent = gql`
  query ($locale: I18NLocaleCode, $slug: String) {
    galleryEvents(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          gallery(pagination: { limit: 100 }) {
            id
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
