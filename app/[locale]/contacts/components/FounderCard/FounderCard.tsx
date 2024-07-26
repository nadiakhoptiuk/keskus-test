import { FC } from 'react';
import Image from 'next/image';

import { FounderCardType } from '@/app/(shared)/types/common.types';

export const FounderCard: FC<FounderCardType> = ({
  photo: {
    alt,
    image: {
      data: {
        attributes: { url },
      },
    },
  },
  name,
  description,
  email,
  phone_displaying,
  phone_link,
}) => {
  return (
    <li className="space-y-3.5">
      <div className="aspect-[320/280] h-auto w-full overflow-hidden rounded md:h-[280px] md:w-full xl:aspect-[384/280] xl:h-auto 2xl:aspect-[454/331]">
        <Image
          src={url}
          alt={alt}
          priority
          width={440}
          height={368}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <p className="text-ui_bold_28">{name}</p>
      <p className="text-ui_reg_16">{description}</p>

      <div className="space-y-2">
        <a href={`mailto:${email}`} className="block w-max text-ui_reg_16">
          {email}
        </a>

        <a href={`tel:+${phone_link}`} className="block w-max text-ui_reg_16">
          {phone_displaying}
        </a>
      </div>
    </li>
  );
};
