import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { Section } from '@/app/(shared)/components/ui/Section';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';

export const News: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section>
      <Container className="decorBorderBottom relative">
        <Typography as="h2" className="mb-10 md:mb-[60px]">
          {t('news')}
        </Typography>

        <ul className="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3"></ul>
      </Container>
    </Section>
  );
};
