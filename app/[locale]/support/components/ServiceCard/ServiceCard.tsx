import { FC } from 'react';
import Image from 'next/image';

// import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { ServiceCardType } from '@/app/(shared)/types/common.types';

export const ServiceCard: FC<ServiceCardType> = ({
  icon: {
    alt,
    image: {
      data: {
        attributes: { url },
      },
    },
  },
  title,
  description,
}) => {
  return (
    <li className="service-card flex flex-col rounded bg-blue-600 px-[30px] py-7 text-zinc-50 max-md:min-h-[452px] md:min-h-[392px] md:p-10">
      {/* <CustomIcon icon={icon} className="mb-10 md:mb-5" /> */}
      <Image
        src={url}
        alt={alt}
        width={48}
        height={48}
        className="mb-10 h-10 w-10 md:mb-5 md:h-12 md:w-12"
      />

      <h2 className="mb-7 font-fixel text-ui_bold_28 max-md:max-w-[265px] md:max-w-[460px] xl:max-w-[474px]">
        {title}
      </h2>

      <Typography className="mt-auto text-ui_reg_16 text-inherit max-md:max-w-[265px] md:max-w-[460px] xl:max-w-[474px]">
        {description}
      </Typography>
    </li>
  );
};
