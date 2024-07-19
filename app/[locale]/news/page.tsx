import { PageProps } from '@/app/(shared)/types/common.types';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';

import { NewsCardType } from '@/app/(shared)/components/ui/NewsCard/NewsCard.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);
  const newsData: NewsCardType[] = t('news', { returnObjects: true });

  return (
    <Section>
      <Container>
        <Typography as="h1" className="mb-10 md:mb-15 ">
          {t('newsTitle')}
        </Typography>

        <NewsList
          locale={locale}
          data={[...newsData, ...newsData, ...newsData].slice(1)}
          className="gap-x-8 gap-y-10 md:gap-y-15"
        />
      </Container>
    </Section>
  );
}
