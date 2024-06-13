import { FC } from 'react';
import Image from 'next/image';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';
import Banner from '@/public/images/hero.png';

export const Hero: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <section className="grid md:mx-auto md:max-w-screen-md md:grid-cols-[446px_auto] xl:max-w-[1440px] xl:grid-cols-[764px_auto]">
      <div className="bg-yellow-400 px-5 py-10 md:pb-[100px] md:pl-8 md:pt-[60px] xl:pb-[94px] xl:pl-20 xl:pr-[62px] xl:pt-[86px]">
        <div className="space-y-10 xl:space-y-11">
          <Typography as="h1">{t('heroTitle')}</Typography>

          <Typography>{t('heroSubtitle')}</Typography>
          <Typography>{t('heroDescription')}</Typography>

          <Button className="w-[220px]" variant="primary">
            {t('heroButton')}
          </Button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={Banner}
          alt="hero image"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </section>
  );
};
