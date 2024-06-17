import Image from 'next/image';
import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Tabs } from '@/app/[locale]/components/Support/components/Tabs';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';
import SupportDecor from '@/public/images/support-decor.png';

export const Support: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section className="relative bg-blue-600" fixedWith>
      <Container className="mg:grid-cols-[336px_1fr] grid gap-15 md:gap-7 xl:grid-cols-[426px_1fr] xl:gap-[74px] 2xl:grid-cols-[600px_1fr]">
        <div className="space-y-10">
          <Typography className="text-zinc-50 md:mb-5" as="h2">
            {t('supportTitle')}
          </Typography>

          <Typography className="text-zinc-50">{t('supportDescriptionOne')}</Typography>
          <Typography className="text-zinc-50">{t('supportDescriptionTwo')}</Typography>
          <Typography className="text-zinc-50">{t('supportDescriptionThree')}</Typography>
        </div>

        <div className="relative z-10 rounded bg-zinc-50 px-7 py-5 2xl:px-10">
          <Tabs />
        </div>
      </Container>

      <Image src={SupportDecor} alt="hero image" className="absolute bottom-0 left-0 z-0" />
    </Section>
  );
};
