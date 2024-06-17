import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';

export const News: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section>
      <Container>
        <Typography as="h2" className="mb-10 md:mb-15">
          {t('news')}
        </Typography>

        <NewsList locale={locale} data={Array.from({ length: 3 })} />
      </Container>
    </Section>
  );
};
