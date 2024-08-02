import { FC } from 'react';
import Image from 'next/image';

import { Typography } from '@/app/(shared)/components/ui/Typography';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';

import { ActivityCommonType, EventLabelType } from '@/app/(shared)/types/common.types';

type Props = {
  event: ActivityCommonType;
  filterData: EventLabelType[];
};

export const EventCard: FC<Props> = ({ event, filterData }) => {
  const {
    attributes: {
      title,
      description,
      image: {
        alt,
        image: {
          data: {
            attributes: { url },
          },
        },
      },
      activity_type,
      type,
    },
  } = event;

  const label = filterData.find(
    filterButton => filterButton.type_of_activity === type,
  )?.label_at_image;

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
          src={url}
          alt={alt}
          width={336}
          height={344}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="mb-[18px] text-ui_bold_28">{title}</h2>
        <Typography as="p">{description}</Typography>

        {activity_type[0].__typename === 'ComponentActivitiesRegularActivity' && (
          <div className="mt-7 grid grid-cols-[12px_auto] items-start gap-2 md:mt-auto">
            <CustomIcon
              icon="arrow-sm"
              className="mt-1 inline-flex shrink-0 -rotate-90 text-blue-600"
            />
            <Typography as="p" className="">
              {activity_type[0].schedule}
            </Typography>
          </div>
        )}
      </div>
    </li>
  );
};
