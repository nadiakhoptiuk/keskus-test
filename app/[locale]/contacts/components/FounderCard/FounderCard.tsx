import { FC } from 'react';
import Image from 'next/image';

import { FounderCardType } from './FounderCard.types';

export const FounderCard: FC<FounderCardType> = ({ imgSrc, name, details, email, tel }) => {
  return (
    <>
      <div className="aspect-[320/280] h-auto w-full overflow-hidden rounded md:h-[280px] md:w-[336px] xl:w-[384px] 2xl:aspect-[440/321] 2xl:h-[321px] 2xl:w-[440px]">
        <Image
          src={imgSrc}
          alt={`photo of ${name}`}
          width={440}
          height={368}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="text-ui_bold_28">{name}</p>
      <p className="text-ui_reg_16">{details}</p>

      <div className="space-y-2">
        <p className="text-ui_reg_16">{email}</p>
        <p className="text-ui_reg_16">{tel}</p>
      </div>
    </>
  );
};
