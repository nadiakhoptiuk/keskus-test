import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { fetchNewsPage } from '@/requests/fetchNewsPage';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchNewsPage(locale);
  if (!pageData) return null;

  const { t } = await initTranslations(locale, [i18nNamespaces.COMMON]);

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

        <NewsList
          readMoreText={t('read_more_btn')}
          data={news}
          className="gap-x-8 gap-y-10 md:gap-y-15"
        />
      </Container>
    </Section>
  );
}
