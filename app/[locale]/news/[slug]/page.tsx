import { Metadata } from 'next';
import Image from 'next/image';
import Markdown from 'react-markdown';

import notFound from '@/app/[locale]/[not-found]/page';
import { SinglePageWrapper } from '@/app/(shared)/components/ui/SinglePageWrapper';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { fetchAllNewsSlugs } from '@/requests/fetchAllNewsSlugs';
import { fetchSingleNewsPageData } from '@/requests/fetchSingleNewsPageData';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { generatePageMetaData } from '@/app/(shared)/utils/generatePageMetaData';

import { PageProps } from '@/app/(shared)/types/common.types';
import { LocaleEnum, PageNameVariableEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

// eslint-disable-next-line unicorn/prevent-abbreviations
export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: LocaleEnum };
}): Promise<Array<{ locale: LocaleEnum; slug: string }>> {
  const newsSlugsData = await fetchAllNewsSlugs(locale);

  return newsSlugsData.map(news_item => {
    return {
      locale: locale,
      slug: news_item.slug,
    };
  });
}

export const generateMetadata = async ({
  params: { locale, slug },
}: PageProps): Promise<Metadata> => {
  const args = {
    locale,
    pageName: PageNameVariableEnum.NEWS,
    route: `${RoutesEnum.NEWS}/${slug}`,
  };

  return await generatePageMetaData(args);
};

export default async function Page({ params: { locale, slug } }: PageProps) {
  if (!slug) return null;

  const pageData = await fetchSingleNewsPageData(locale, slug);
  if (!pageData) return notFound({ params: { locale: locale } });

  const { t } = await initTranslations(locale, [i18nNamespaces.COMMON, i18nNamespaces.NEWS]);

  const {
    generalInfo: { subtitile_another_news },
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
    <SinglePageWrapper
      goBackLink={`${RoutesEnum.NEWS}`}
      linkText={t('go_back_link', { ns: i18nNamespaces.NEWS })}
    >
      <div className="max-w-full">
        <Typography
          as="h1"
          className="w-[83%] max-md:mb-10 max-md:!text-ui_bold_20 md:mb-15 md:w-[58%] md:!text-ui_bold_32 xl:w-[904px] xl:!text-ui_bold_40"
        >
          {title}
        </Typography>

        <div className="mb-15 overflow-hidden rounded md:mb-25 xl:h-[480px] xl:w-[1216px] 2xl:h-[570px] 2xl:w-[1440px]">
          <Image
            src={url}
            alt={alt}
            width={1216}
            height={480}
            className="my-0 h-full w-full object-cover object-center"
          />
        </div>

        <Markdown
          components={{
            h1: 'p',
            h2: 'p',
            h3: 'p',
            h4: 'p',
            h5: 'p',
            h6: 'p',
            a(props) {
              const { href, children, ...rest } = props;
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  {...rest}
                  className="base-transition font-bold hocus:text-blue-600"
                >
                  {children}
                </a>
              );
            },
          }}
          className="prose mx-auto max-w-[1008px] pb-15 prose-p:mb-15 prose-p:mt-0 prose-p:whitespace-pre-wrap prose-p:text-ui_reg_16 last:prose-p:mb-0 prose-img:my-0 md:pb-25 md:prose-p:mb-20 md:prose-p:text-ui_reg_18 xl:w-[1008px]"
        >
          {content}
        </Markdown>
      </div>

      {lastThreeNews && lastThreeNews.length > 0 && (
        <div className="pt-15 md:pt-25">
          <Typography
            as="h2"
            className="mb-10 font-kyiv-type-sans max-xl:text-ui_bold_32 md:mb-15 xl:text-ui_bold_40"
          >
            {subtitile_another_news}
          </Typography>

          <NewsList
            data={lastThreeNews}
            readMoreText={t('read_more_btn', { ns: i18nNamespaces.COMMON })}
          />
        </div>
      )}
    </SinglePageWrapper>
  );
}
