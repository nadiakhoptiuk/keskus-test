import Image from 'next/image';
import Markdown from 'react-markdown';

import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { SinglePageWrapper } from '@/app/(shared)/components/ui/SinglePageWrapper';

import { fetchAllNewsSlugs } from '@/requests/fetchAllNewsSlugs';
import { fetchSingleNewsPageData } from '@/requests/fetchSingleNewsPageData';

import { PageProps } from '@/app/(shared)/types/common.types';
import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: LocaleEnum };
}): Promise<Array<{ locale: LocaleEnum }>> {
  const newsSlugsData = await fetchAllNewsSlugs(locale);

  return (
    newsSlugsData.map(news_item => {
      return {
        locale: locale,
        slug: news_item.slug,
      };
    }) || []
  );
}

export default async function Page({ params: { locale, slug } }: PageProps) {
  if (!slug) return null;

  const pageData = await fetchSingleNewsPageData(locale, slug);
  if (!pageData) return null;

  const {
    generalInfo: { read_more_button, subtitile_another_news, see_all_news_link },
    currentNewsData: {
      attributes: {
        title,
        content,
        image: {
          alt,
          image: {
            data: {
              attributes: { url },
            },
          },
        },
      },
    },
    lastThreeNews,
  } = pageData;

  return (
    <SinglePageWrapper goBackLink={`${RoutesEnum.NEWS}`} linkText={see_all_news_link}>
      <div className="max-w-full">
        <h1>{title}</h1>

        <div className="mb-15 overflow-hidden md:mb-25 xl:h-[480px] xl:w-[1216px]">
          <Image
            src={url}
            alt={alt}
            width={1216}
            height={480}
            className="my-0 h-full w-full object-cover object-center"
          />
        </div>

        <Markdown className="prose mx-auto max-w-[1008px] xl:w-[1008px]">{content}</Markdown>
      </div>

      {lastThreeNews && lastThreeNews.length > 0 && (
        <div className="py-15 md:py-25">
          <h2 className="news-h2">{subtitile_another_news}</h2>
          <NewsList data={lastThreeNews} readMoreText={read_more_button} />
        </div>
      )}
    </SinglePageWrapper>
  );
}
