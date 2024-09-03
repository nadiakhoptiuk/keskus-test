import { Metadata } from 'next';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { fetchNewsPage } from '@/requests/fetchNewsPage';
import { generatePageMetaData } from '@/app/(shared)/utils/generatePageMetaData';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { PageNameVariableEnum, RoutesEnum } from '@/app/(shared)/types/enums';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const args = {
    locale,
    pageName: PageNameVariableEnum.NEWS,
    route: RoutesEnum.NEWS,
  };

  return await generatePageMetaData(args);
};

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchNewsPage(locale);
  if (!pageData) return null;

  const { t } = await initTranslations(locale, [i18nNamespaces.COMMON, i18nNamespaces.NEWS]);

  const {
    newspage: { page_title },
    news,
  } = pageData;

  return (
    <Section>
      <Container>
        <Typography as="h1" className="mb-10 md:mb-15 ">
          {page_title}
        </Typography>

        {news.length > 0 ? (
          <NewsList
            readMoreText={t('read_more_btn')}
            data={news}
            className="gap-x-8 gap-y-10 md:gap-y-15"
          />
        ) : (
          <Typography as="p" className="mb-10 md:mb-15 ">
            {t('no_news', { ns: i18nNamespaces.NEWS })}
          </Typography>
        )}
      </Container>
    </Section>
  );
}
