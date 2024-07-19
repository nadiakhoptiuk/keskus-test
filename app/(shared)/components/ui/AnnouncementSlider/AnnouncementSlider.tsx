'use client';

import { FC, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css/navigation';

import { BaseSlider } from '../BaseSlider';
import { AnnouncementCard } from '@/app/[locale]/components/Announcement/components/AnnouncementCard';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { AnnouncementCardType } from '@/app/[locale]/components/Announcement/components/AnnouncementCard/AnnouncementCard.types';

type Props = {
  data: AnnouncementCardType[];
  locale: LocaleEnum;
};

export const AnnouncementSlider: FC<Props> = ({ data = [], locale }) => {
  const [newsSwiperInstance, setNewsSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <BaseSlider
      data={data}
      locale={locale}
      Component={AnnouncementCard}
      swiperInstance={newsSwiperInstance}
      setSwiperInstance={setNewsSwiperInstance}
    />
  );
};
