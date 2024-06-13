'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { Section } from '@/app/(shared)/components/ui/Section';

import PartnerLogo from '@/public/icons/partner-logo.svg';

export const Scroller: FC = () => {
  return (
    <Section>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mx-auto max-w-[1440px]"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="inline-flex h-[60px] w-[220px] items-center justify-center"
          >
            <PartnerLogo className="h-[60px] w-[220px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
