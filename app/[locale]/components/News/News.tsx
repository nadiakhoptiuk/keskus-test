import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';
import { NewsCardType } from '@/app/(shared)/components/ui/NewsCard/NewsCard.types';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

export const News: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);
  const newsData: NewsCardType[] = t('news', { returnObjects: true });

  return (
    <Section>
      <Container>
        <Typography as="h2" className="mb-10 md:mb-15">
          {t('newsTitle')}
        </Typography>

        <NewsList locale={locale} data={newsData} />
      </Container>
    </Section>
  );
};
