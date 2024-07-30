import { FC } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

import { Typography } from '@/app/(shared)/components/ui/Typography';

import { ActivityIrregularType } from '@/app/(shared)/types/common.types';

type Props = {
  card: ActivityIrregularType;
  Tag?: 'div' | 'li';
};

export const AnnouncementCard: FC<Props> = ({ card, Tag = 'div' }) => {
  const {
    title,
    description,
    image: {
      image: {
        data: {
          attributes: { url },
        },
      },
    },
    activity_type,
  } = card.attributes;

  return (
    <Tag className="w-full md:flex md:items-stretch md:gap-x-10 xl:h-[184px]">
      <div className="grid gap-y-4 pb-5 md:pb-0">
        <Typography as="span" className="text-sm font-light text-zinc-500">
          {format(new Date(activity_type[0].date), 'MMMM d, y')}
        </Typography>

        <Typography as="h3">{title}</Typography>

        <Typography className="line-clamp-4">{description}</Typography>
      </div>

      <div className="h-[184px] w-[224px] shrink-0 overflow-hidden rounded">
        <Image
          src={url}
          alt="new image"
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
