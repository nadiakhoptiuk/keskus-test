'use client';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { Section } from '@/app/(shared)/components/ui/Section';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import PartnerLogo from '@/public/icons/partner-logo.svg';

export const Scroller: FC = () => {
  const { i18n } = useTranslation();

  if (i18n.language === LocaleEnum.UK) return <div className="py-14" />;

  return (
    <Section>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mx-auto max-w-[1440px]"
        loop={true}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="flex !h-[60px] !w-[220px] shrink-0 items-center justify-center"
          >
            <PartnerLogo className="h-[60px] w-[210px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
