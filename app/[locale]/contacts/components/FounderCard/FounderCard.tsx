import { FC } from 'react';
import Image from 'next/image';

import { FounderCardType } from './FounderCard.types';

export const FounderCard: FC<FounderCardType> = ({ imgSrc, name, details, email, tel }) => {
  return (
    <li className="space-y-3.5">
      <div className="aspect-[320/280] h-auto w-full overflow-hidden rounded md:h-[280px] md:w-full xl:aspect-[384/280] xl:h-auto 2xl:aspect-[454/331]">
        <Image
          src={imgSrc}
          alt={`photo of ${name}`}
          priority
          width={440}
          height={368}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <p className="text-ui_bold_28">{name}</p>
      <p className="text-ui_reg_16">{details}</p>

      <div className="space-y-2">
        <p className="text-ui_reg_16">{email}</p>
        <p className="text-ui_reg_16">{tel}</p>
      </div>
    </li>
  );
};
