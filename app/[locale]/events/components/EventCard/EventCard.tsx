import { FC } from 'react';
import Image from 'next/image';

import { Typography } from '@/app/(shared)/components/ui/Typography';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';

import { EventCardType } from './EventCard.types';
import { FilterButtonType } from '../FilterButtons/FilterButtons.types';

type Props = {
  event: EventCardType;
  filterData: FilterButtonType[];
};

export const EventCard: FC<Props> = ({ event, filterData }) => {
  const { heading, href, schedule, details, type } = event;
  const label = filterData.find(filterButton => filterButton.type === type)?.label;

  return (
    <li className="md:grid md:grid-cols-2 md:gap-8">
      <div className="relative overflow-hidden rounded max-md:mb-7 max-md:aspect-[320/260] max-md:h-auto max-md:min-w-[320px] md:col-span-1 md:col-start-1 md:h-[344px] md:w-full">
        {label && (
          <Typography
            as="span"
            className="absolute left-0 top-0 h-8 rounded-sm bg-blue-600 px-3 py-1 text-white"
          >
            {label}
          </Typography>
        )}

        <Image
          src={href}
          width={336}
          height={344}
          alt={heading}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="mb-[18px] text-ui_bold_28">{heading}</h2>
        <Typography as="p">{details}</Typography>

        {schedule && (
          <div className="mt-7 grid grid-cols-[12px_auto] items-start gap-2 md:mt-auto">
            <CustomIcon
              icon="arrow-sm"
              className="mt-1 inline-flex shrink-0 -rotate-90 text-blue-600"
            />
            <Typography as="p" className="">
              {schedule}
            </Typography>
          </div>
        )}
      </div>
    </li>
  );
};
