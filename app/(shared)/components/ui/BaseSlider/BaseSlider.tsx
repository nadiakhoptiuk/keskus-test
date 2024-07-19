'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import { CustomNavigation } from './CustomNavigation';

import { LocaleEnum } from '@/app/(shared)/types/enums';

type Props = {
  data: unknown[];
  locale: LocaleEnum;
  swiperInstance: SwiperType | null;
  setSwiperInstance: React.Dispatch<React.SetStateAction<SwiperType | null>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<{ locale: LocaleEnum; card: any }>;
};

export const BaseSlider: FC<Props> = ({
  data = [],
  locale,
  swiperInstance,
  setSwiperInstance,
  Component,
}) => {
  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper: SwiperType) => setSwiperInstance(swiper)}
        spaceBetween={32}
        slidesPerView={1}
        centeredSlides={false}
        navigation={false}
        className="mx-auto max-md:max-w-[440px] md:max-w-[704px]"
        loop={false}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((element, index) => (
          <SwiperSlide key={index}>
            <Component locale={locale} key={index} card={element} />
          </SwiperSlide>
        ))}
      </Swiper>

      <CustomNavigation swiper={swiperInstance} />
    </div>
  );
};
