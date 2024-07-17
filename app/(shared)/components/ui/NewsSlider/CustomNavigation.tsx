'use client';

import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper as SwiperType } from 'swiper';
import { classnames } from '@/app/(shared)/utils/classnames';

import { CustomIcon } from '../CustomIcon';

import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { SliderButtonIdType, SliderButtonType } from './NewsSlider.types';

type Props = {
  swiper: SwiperType | null;
};

export const CustomNavigation: FC<Props> = ({ swiper }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const { t } = useTranslation([i18nNamespaces.HOMEPAGE]);
  const buttonsData: SliderButtonType[] = t('sliderButtons', { returnObjects: true });

  useEffect(() => {
    if (!swiper) return;

    const updateNavigation = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('slideChange', updateNavigation);
    updateNavigation();

    return () => {
      swiper.off('slideChange', updateNavigation);
    };
  }, [swiper]);

  const checkIfDisabled = (id: SliderButtonIdType): boolean => {
    return (id === 'prev' && isBeginning) || (id === 'next' && isEnd);
  };

  return (
    <div className="-top-[96px] right-0 flex max-w-max gap-3 max-md:mx-auto max-md:mt-10 md:absolute md:z-[1]">
      {swiper &&
        buttonsData.map(({ id, ariaLabel }) => {
          return (
            <button
              key={id}
              onClick={() => (id === 'next' ? swiper.slideNext() : swiper.slidePrev())}
              aria-label={ariaLabel}
              className={classnames(
                'slider-news__nav-button',
                id === 'next' ? 'slider-news__nav-button--next' : 'slider-news__nav-button--prev',
              )}
              disabled={checkIfDisabled(id)}
            >
              <CustomIcon
                icon="arrow"
                className={classnames(
                  id === 'prev' ? 'rotate-180' : '',
                  'text-blue-600',
                  'size-10 h-full w-full md:size-[36px]',
                )}
              />
            </button>
          );
        })}
    </div>
  );
};
