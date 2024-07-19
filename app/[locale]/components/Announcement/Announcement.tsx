'use client';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useMedia } from 'react-use';

import { Calendar } from '@/app/[locale]/components/Announcement/components/Calendar';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';
import { AnnouncementCardType } from './components/AnnouncementCard/AnnouncementCard.types';
import { AnnouncementList } from './components/AnnouncementList/AnnouncementList';
import { AnnouncementSlider } from '@/app/(shared)/components/ui/AnnouncementSlider';

export const Announcement: FC<LocaleProps> = ({ locale }) => {
  const { t } = useTranslation([i18nNamespaces.HOMEPAGE]);
  const announcementData: AnnouncementCardType[] = t('announcement', { returnObjects: true });
  const isMobile = useMedia('(max-width: 767px)', false);

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

        {isMobile && <AnnouncementSlider locale={locale} data={announcementData} />}
        {!isMobile && <AnnouncementList list={announcementData} />}
      </Container>
    </Section>
  );
};
