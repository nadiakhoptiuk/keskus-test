import { FC } from 'react';
import Image from 'next/image';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';
import Banner from '@/public/images/hero@2x.png';

export const Hero: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section
      className="from-yellow-400 to-zinc-50 md:overflow-x-hidden md:bg-gradient-to-r md:from-[50%] md:to-[50%] lg:from-[56%] lg:to-[56%] xl:from-[52.4%] xl:to-[52.4%] 2xl:from-[51.8%] 2xl:to-[51.8%]"
      variant="custom"
      fixedWith
    >
      <div className="w-full bg-yellow-400 max-md:py-10 md:bg-transparent">
        <Container className="relative grid grid-rows-1 from-yellow-400 to-zinc-50 md:grid-cols-[1fr_1fr] md:grid-rows-1 md:gap-4 md:bg-gradient-to-r md:from-[446px] md:to-[446px] md:pb-25 md:pt-15 xl:gap-[62px] xl:from-[654px] xl:to-[654px] xl:pb-[94px] xl:pt-[86px]">
          <div className="space-y-10 xl:w-[547px] xl:space-y-11 xl:p-0">
            <Typography as="h1">{t('heroTitle')}</Typography>

            <Typography className="font-regular font-fixel text-[18px] leading-[1.6]">
              {t('heroSubtitle')}
            </Typography>
            <Typography className="font-regular font-fixel text-[18px] leading-[1.6]">
              {t('heroDescription')}
            </Typography>

            <Button className="h-[60px] w-[220px]" variant="primary">
              {t('heroButton')}
            </Button>
          </div>

          <div className="mx-auto shrink-0 max-md:hidden max-md:aspect-[360/318] max-md:max-w-[480px] md:absolute md:bottom-0 md:right-[-258px] md:w-[580px] xl:right-[-366px] xl:h-[674px] xl:w-[928px] 2xl:right-[-142px]">
            <Image
              src={Banner}
              priority
              alt="hero image"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-center max-md:object-contain md:object-cover xl:object-top"
            />
          </div>
        </Container>
      </div>

      <div className="mx-auto shrink-0 max-md:aspect-[360/318] max-md:max-w-[480px] md:hidden">
        <Image
          src={Banner}
          alt="hero image"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-center max-md:object-contain md:object-cover"
        />
      </div>
    </Section>
  );
};
