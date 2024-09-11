'use client';

import { FC } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { PartnerLogoType } from '@/app/(shared)/types/common.types';

type Props = {
  data: PartnerLogoType[];
};

export const Scroller: FC<Props> = ({ data }) => {
  return (
    <Marquee
      autoFill={true}
      gradient={true}
      gradientColor="#FAFAFA"
      gradientWidth={150}
      className="mx-auto max-w-[1800px]"
    >
      {data.length > 0 &&
        data.map(({ id, image, alt }) => (
          <Image
            key={id}
            src={image.data.attributes.url}
            alt={alt}
            width={220}
            height={60}
            className="!h-15 !w-max grayscale"
          />
        ))}
    </Marquee>
  );
};
