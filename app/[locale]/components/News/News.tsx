'use client';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { NewsSlider } from '@/app/(shared)/components/ui/NewsSlider';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';
import { NewsCardType } from '@/app/(shared)/components/ui/NewsCard/NewsCard.types';
import { useMedia } from 'react-use';

export const News: FC<LocaleProps> = ({ locale }) => {
  const { t } = useTranslation([i18nNamespaces.HOMEPAGE]);
  const newsData: NewsCardType[] = t('news', { returnObjects: true });
  const isDesktop = useMedia('(min-width: 1280px)', false);

  return (
    <Section>
      <Container>
        <Typography as="h2" className="mb-10 md:mb-15">
          {t('newsTitle')}
        </Typography>

        {isDesktop && <NewsList locale={locale} data={newsData} />}
        {!isDesktop && <NewsSlider locale={locale} data={newsData} />}
      </Container>
    </Section>
  );
};
