'use client';

import { FC } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { Section } from '@/app/(shared)/components/ui/Section';

import { PartnerLogoType } from '@/app/(shared)/types/common.types';

type Props = {
  data: PartnerLogoType[];
};

export const Scroller: FC<Props> = ({ data }) => {
  return (
    <Section className="max-md:!h-[180px] md:!h-[260px]">
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
    </Section>
  );
};
