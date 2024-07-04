import { FC } from 'react';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { LocaleProps, i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export const Info: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.ABOUT_US_PAGE]);

  return (
    <Section
      fixedWith={true}
      className="infoSection bg-[top_left] bg-no-repeat pb-15 pt-10 md:bg-[bottom_left_-315px] md:pb-[204px] md:pt-15 lg:bg-[bottom_left_-180px] xl:bg-[bottom_left_-80px] xl:pb-[246px] xl:pt-[84px] 2xl:bg-[bottom_left]"
    >
      <Container className="md:grid md:grid-cols-[255px_276px] md:gap-x-[138px] xl:grid-cols-[391px_544px] xl:gap-x-[281px]">
        <Typography as="h1" className="max-md:mb-[248px] md:w-[391px]">
          {t('infoSection.title')}
        </Typography>

        <div className="xl:w-[512px] xl:pt-[102px]">
          <Typography className="mb-8 text-[16px] md:text-[18px]">
            {t('infoSection.aboutParagraph1')}
          </Typography>
          <Typography className="text-[16px] md:text-[18px]">
            {t('infoSection.aboutParagraph2')}
          </Typography>
        </div>
      </Container>
    </Section>
  );
};
