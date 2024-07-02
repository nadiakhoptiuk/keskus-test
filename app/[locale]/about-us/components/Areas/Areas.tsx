import { FC } from 'react';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { ActivityAreaList } from '@/app/(shared)/components/ui/ActivityAreaList/ActivityAreaList';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { LocaleProps, i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { ActivityAreaCardType } from '@/app/(shared)/types/common.types';

export const Areas: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.ABOUT_US_PAGE]);
  const areas: ActivityAreaCardType[] = t('areasSection.areas', { returnObjects: true });

  return (
    <Section className="!pt-0 md:mt-[-72px] xl:mt-[-96px]">
      <Container className="">
        <Typography
          as="h2"
          className="mb-10 whitespace-break-spaces md:mb-15 md:ml-auto md:w-[321px] md:text-left md:text-[32px] md:leading-[1.2] xl:mb-[100px] xl:w-[544px] xl:text-[40px] 2xl:w-[766px]"
        >
          {t('areasSection.subtitle')}
        </Typography>

        <ActivityAreaList cards={areas} />
      </Container>
    </Section>
  );
};