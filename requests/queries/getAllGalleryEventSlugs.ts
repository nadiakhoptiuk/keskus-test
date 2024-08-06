import { gql } from 'graphql-request';

export const getAllGalleryEventsSlugs = gql`
  query ($locale: I18NLocaleCode) {
    galleryEvents(locale: $locale, pagination: { limit: 100 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
