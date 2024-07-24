import { FC } from 'react';
import Link from 'next/link';

import { Calendar } from '@/app/[locale]/components/Announcement/components/Calendar';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { AnnouncementList } from './components/AnnouncementList/AnnouncementList';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { AnnouncementCardType } from './components/AnnouncementCard/AnnouncementCard.types';
import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';
import { RoutesEnum } from '@/app/(shared)/types/enums';

export const Announcement: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);
  const announcementData: AnnouncementCardType[] = t('announcement', { returnObjects: true });

  return (
    <Section>
      <Container className="decor-border-bottom relative grid grid-cols-announcementSm grid-rows-announcementSm grid-areas-announcementSm md:grid-cols-announcementMd md:grid-rows-announcementMd md:gap-y-15 md:grid-areas-announcementMd xl:grid-cols-announcementXl xl:grid-rows-announcementXl xl:gap-x-[78px] xl:gap-y-10 xl:grid-areas-announcementXl">
        <div className="grid-in-title md:mr-8 xl:mr-0">
          <Typography
            as="h2"
            className="mb-10 max-xl:!text-ui_bold_32 md:mb-15 md:max-w-[230px] xl:max-w-[696px] xl:!text-ui_bold_40"
          >
            {t('announcementTitle')}
          </Typography>

          <span className="block w-full border-b border-black/20 xl:max-w-[696px] 2xl:max-w-[920px]" />
        </div>

        <Calendar
          className="max-h-[442px] shrink-0 grid-in-calendar max-md:mx-auto md:ml-auto xl:-mt-10"
          locale={locale}
        />

        <AnnouncementList list={announcementData} />
        <Link
          href={RoutesEnum.EVENTS}
          className="base-transition btn-primary col-span-2 mx-auto flex min-h-[60px] w-max min-w-[220px] items-center justify-center px-8 py-4 text-ui_semibold_18 max-md:mt-15 md:mt-0 xl:mt-10"
        >
          {t('announcementLearnMore')}
        </Link>
      </Container>
    </Section>
  );
};
