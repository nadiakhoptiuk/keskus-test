import { FC } from 'react';
import Image from 'next/image';

import { PartnerLogoType } from '@/app/(shared)/types/common.types';

type Props = {
  partners: PartnerLogoType[];
};

export const PartnersList: FC<Props> = ({ partners }) => {
  return (
    <ul className="flex gap-y-8 max-md:flex-col md:flex-wrap md:justify-center md:gap-x-4 xl:gap-x-8 xl:gap-y-15">
      {partners.map(
        ({
          id,
          alt,
          image: {
            data: {
              attributes: { url },
            },
          },
        }) => {
          return (
            <li
              key={id}
              className="inline-flex items-center justify-center max-md:h-[100px] md:h-[70px] md:w-[224px] xl:h-[120px] xl:w-[384px] 2xl:h-[142px] 2xl:w-[455px]"
            >
              <Image
                src={url}
                alt={alt}
                width={384}
                height={224}
                className="h-full w-full object-contain"
              />
            </li>
          );
        },
      )}
    </ul>
  );
};
