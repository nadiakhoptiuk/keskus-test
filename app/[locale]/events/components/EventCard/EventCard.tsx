import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

import { Typography } from '@/app/(shared)/components/ui/Typography';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';

import { ActivityCommonType, EventLabelType } from '@/app/(shared)/types/common.types';
import { RoutesEnum } from '@/app/(shared)/types/enums';

type Props = {
  event: ActivityCommonType;
  filterData: EventLabelType[];
  readMoreText: string;
};

export const EventCard: FC<Props> = ({ event, filterData, readMoreText }) => {
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
      slug,
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

        <div className="mb-[18px] w-full bg-blue-50 px-2 py-1">
          <Typography as="span" className="!text-ui_med_16 text-blue-600">
            {activity_type[0].__typename === 'ComponentActivitiesRegularActivity'
              ? activity_type[0].schedule
              : format(new Date(activity_type[0].date), 'dd.MM.y')}
          </Typography>
        </div>

        <Typography as="p" className="mb-[28px] line-clamp-5">
          {description}
        </Typography>

        <Link
          href={`${RoutesEnum.EVENTS}/${slug}`}
          className="ml-auto mt-auto flex items-center gap-1"
        >
          <span>{readMoreText}</span>
          <CustomIcon
            icon="arrow-sm"
            className="inline-flex !size-[14px] shrink-0 -rotate-90 text-blue-600"
          />
        </Link>
      </div>
    </li>
  );
};
