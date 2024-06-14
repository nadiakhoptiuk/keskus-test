import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { NewsCard } from '@/app/[locale]/components/News/components/NewsCard';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';

export const News: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section>
      <Container>
        <Typography as="h2" className="mb-10 md:mb-[60px]">
          {t('news')}
        </Typography>

        <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <NewsCard locale={locale} key={index} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};
