import { gql } from 'graphql-request';

export const getAboutPage = gql`
  query ($locale: I18NLocaleCode) {
    aboutUsPage(locale: $locale) {
      data {
        attributes {
          page_title
          text_description
          subtitle_areas_of_activity
          areas_of_activity {
            id
            area_type
            title
            list
          }
          subtitle_partners
          partner_logo {
            id
            image {
              data {
                attributes {
                  url
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`;
