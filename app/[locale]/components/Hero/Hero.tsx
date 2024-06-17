import { Section } from '@/app/(shared)/components/ui/Section';
import { FC } from 'react';
import Image from 'next/image';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';
import Banner from '@/public/images/hero.png';

export const Hero: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section
      className="bg-gradient-to-b from-yellow-400 from-[56.6%] to-zinc-50 to-[56.6%] md:bg-gradient-to-r md:from-[56.6%] md:to-[56.6%] lg:from-[55%] lg:to-[55%] xl:from-[52.4%] xl:to-[52.4%] 2xl:from-[52%] 2xl:to-[52%]"
      variant="custom"
      fixedWith
    >
      <Container className="grid grid-rows-2 items-center md:grid-cols-[1fr_1fr] md:grid-rows-1 md:gap-4 xl:gap-[62px]">
        <div className="md:pb-25 md:pt-15 space-y-10 xl:space-y-11 xl:p-0">
          <Typography as="h1">{t('heroTitle')}</Typography>

          <Typography>{t('heroSubtitle')}</Typography>
          <Typography>{t('heroDescription')}</Typography>

          <Button className="w-[220px]" variant="primary">
            {t('heroButton')}
          </Button>
        </div>

        <div className="relative shrink-0">
          <Image
            src={Banner}
            alt="hero image"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </Container>
    </Section>
  );
};
