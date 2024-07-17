'use client';

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';

import { NewsCard } from '@/app/(shared)/components/ui/NewsCard';
import { CustomNavigation } from './CustomNavigation';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { NewsCardType } from '../NewsCard/NewsCard.types';

type Props = {
  data: NewsCardType[];
  locale: LocaleEnum;
};

export const NewsSlider: FC<Props> = ({ data = [], locale }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper: SwiperType) => setSwiperInstance(swiper)}
        spaceBetween={32}
        slidesPerView={1}
        centeredSlides={false}
        navigation={false}
        className="mx-auto max-w-[1440px]"
        loop={false}
        modules={[Navigation]}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((element, index) => (
          <SwiperSlide key={index}>
            <NewsCard locale={locale} key={index} card={element} />
          </SwiperSlide>
        ))}
      </Swiper>

      <CustomNavigation swiper={swiperInstance} />
    </div>
  );
};
