'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import { Calendar } from '@/app/[locale]/components/Announcement/components/Calendar';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { AnnouncementList } from './components/AnnouncementList/AnnouncementList';

import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { ActivityIrregularType } from '@/app/(shared)/types/common.types';

type Props = {
  locale: LocaleEnum;
  title: string;
  btnToday: string;
  allEventsBtnText: string;
  allIrregularActivities: ActivityIrregularType[];
  availableDatesAtCalendar: Date[];
  readMoreText: string;
  noAnnouncement: string;
};

export const Announcement: FC<Props> = ({
  locale,
  title,
  btnToday,
  allEventsBtnText,
  allIrregularActivities,
  availableDatesAtCalendar,
  readMoreText,
  noAnnouncement,
}) => {
  const [value, onChange] = useState<Date>(new Date());
  const [announcementData, setAnnouncementData] = useState<ActivityIrregularType[] | null>(null);

  useEffect(() => {
    if (!value || !allIrregularActivities || allIrregularActivities.length === 0) return;

    const activitiesByChosenDate = allIrregularActivities.filter(
      ({ attributes: { activity_type } }) =>
        format(new Date(activity_type[0].date), 'MM/dd/yyyy') === format(value, 'MM/dd/yyyy'),
    );
    setAnnouncementData(activitiesByChosenDate);
  }, [allIrregularActivities, value]);

  return (
    <Section>
      <Container className="decor-border-bottom relative grid grid-rows-announcementSm grid-areas-announcementSm max-md:grid-cols-1 md:grid-cols-announcementMd md:grid-rows-announcementMd md:gap-y-15 md:grid-areas-announcementMd xl:grid-cols-announcementXl xl:grid-rows-announcementXl xl:gap-x-[78px] xl:gap-y-10 xl:grid-areas-announcementXl">
        <div className="grid-in-title md:mr-8 xl:mr-0">
          <Typography
            as="h2"
            className="mb-10 max-xl:!text-ui_bold_32 md:mb-15 md:max-w-[230px] xl:max-w-[696px] xl:!text-ui_bold_40"
          >
            {title}
          </Typography>

          <span className="block w-full border-b border-black/20 xl:max-w-[696px] 2xl:max-w-[920px]" />
        </div>

        <Calendar
          className="shrink-0 grid-in-calendar max-md:mx-auto md:ml-auto xl:-mt-10"
          locale={locale}
          btnToday={btnToday}
          calendarValue={value}
          onDateChange={onChange}
          availableDatesAtCalendar={availableDatesAtCalendar}
        />

        {announcementData && announcementData?.length > 0 ? (
          <AnnouncementList list={announcementData} readMoreText={readMoreText} />
        ) : (
          <Typography as="p" className="grid w-full gap-y-10 grid-in-announcements">
            {noAnnouncement}
          </Typography>
        )}

        <Link
          href={RoutesEnum.EVENTS}
          className="base-transition btn-primary col-span-2 mx-auto flex min-h-[60px] w-max min-w-[220px] items-center justify-center px-8 py-4 text-ui_semibold_18 max-md:mt-15 md:mt-0 xl:mt-10"
        >
          {allEventsBtnText}
        </Link>
      </Container>
    </Section>
  );
};
