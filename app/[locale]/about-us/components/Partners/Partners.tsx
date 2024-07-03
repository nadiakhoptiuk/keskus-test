import { FC } from 'react';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { PartnersList } from '@/app/(shared)/components/ui/PartnersList';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { LocaleProps, i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { icons } from '@/app/(shared)/components/ui/CustomIcon/CustomIcon.types';

export const Partners: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.ABOUT_US_PAGE]);
  const partners: (keyof typeof icons)[] = t('partners.icons', { returnObjects: true });

  return (
    <Section>
      <Container>
        <Typography as="h2" className="mb-10 !leading-[1.2]">
          {t('partners.subtitle')}
        </Typography>

        <PartnersList partners={partners} />
      </Container>
    </Section>
  );
};
