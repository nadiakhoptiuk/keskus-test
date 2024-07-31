import { gql } from 'graphql-request';

export const getSingleNewsPageData = gql`
  query ($locale: I18NLocaleCode, $slug: String) {
    newsPage(locale: $locale) {
      data {
        attributes {
          page_title
          read_more_button
          subtitile_another_news
          see_all_news_link
        }
      }
    }
    currentNewsData: news(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          image {
            alt
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          content
        }
      }
    }
    lastThreeNews: news(
      locale: $locale
      sort: "date:desc"
      filters: { slug: { ne: $slug } }
      pagination: { limit: 3 }
    ) {
      data {
        id
        attributes {
          title
          slug
          date
          image {
            alt
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          content
        }
      }
    }
  }
`;
