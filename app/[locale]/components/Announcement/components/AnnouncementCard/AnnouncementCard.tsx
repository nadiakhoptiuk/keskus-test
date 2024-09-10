import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

import { Typography } from '@/app/(shared)/components/ui/Typography';

import { ActivityIrregularType } from '@/app/(shared)/types/common.types';
import { RoutesEnum } from '@/app/(shared)/types/enums';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';

type Props = {
  card: ActivityIrregularType;
  readMoreText: string;
  Tag?: 'div' | 'li';
};

export const AnnouncementCard: FC<Props> = ({ card, readMoreText, Tag = 'div' }) => {
  const {
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
    slug,
    activity_type,
  } = card.attributes;

  return (
    <Tag className="w-full md:flex md:items-center md:gap-x-10 xl:h-[184px]">
      <div className="grid h-max gap-y-4 pb-5 md:pb-0">
        <Typography as="span" className="text-sm font-light text-zinc-500">
          {format(new Date(activity_type[0].date), 'MMMM d, y')}
        </Typography>

        <Typography as="h3">{title}</Typography>

        <Typography className="max-md:line-clamp-6 md:line-clamp-3">{description}</Typography>

        <Link
          href={`${RoutesEnum.EVENTS}/${slug}`}
          className="base-transition ml-auto mt-auto flex items-center gap-1 hocus:text-blue-600"
        >
          <span>{readMoreText}</span>
          <CustomIcon
            icon="arrow-sm"
            className="inline-flex !size-[14px] shrink-0 -rotate-90 text-blue-600"
          />
        </Link>
      </div>

      <div className="h-[184px] shrink-0 overflow-hidden rounded max-md:w-full md:h-[200px] md:w-[233px] xl:w-[224px]">
        <Image
          src={url}
          alt={alt}
          width={440}
          height={320}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </Tag>
  );
};
