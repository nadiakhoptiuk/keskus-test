'use client';

import { FC, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css/navigation';

import { NewsCard } from '@/app/(shared)/components/ui/NewsCard';
import { BaseSlider } from '../BaseSlider';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { NewsCardType } from '../NewsCard/NewsCard.types';

type Props = {
  data: NewsCardType[];
  locale: LocaleEnum;
};

export const NewsSlider: FC<Props> = ({ data = [], locale }) => {
  const [newsSwiperInstance, setNewsSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <BaseSlider
      data={data}
      locale={locale}
      Component={NewsCard}
      swiperInstance={newsSwiperInstance}
      setSwiperInstance={setNewsSwiperInstance}
    />
  );
};
