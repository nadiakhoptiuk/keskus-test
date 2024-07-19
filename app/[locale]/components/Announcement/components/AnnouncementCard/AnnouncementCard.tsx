import { FC } from 'react';
import Image from 'next/image';

import { Typography } from '@/app/(shared)/components/ui/Typography';

import { AnnouncementCardType } from './AnnouncementCard.types';

type Props = {
  card: AnnouncementCardType;
  Tag?: 'div' | 'li';
};

export const AnnouncementCard: FC<Props> = ({ card, Tag = 'div' }) => {
  const { image, date, title, description } = card;

  return (
    <Tag className="w-full md:flex md:items-stretch md:gap-x-10">
      <div className="grid gap-y-4 pb-5 md:pb-0">
        <Typography as="span" className="text-sm font-light text-zinc-500">
          {date}
        </Typography>

        <Typography as="h3">{title}</Typography>

        <Typography className="line-clamp-4">{description}</Typography>
      </div>

      <div className="h-[184px] shrink-0 overflow-hidden rounded">
        <Image
          src={image}
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
