import { FC } from 'react';
import Image from 'next/image';

import { Typography } from '@/app/(shared)/components/ui/Typography';

import AnnouncementImage from '@/public/images/announcement.jpg';

type Props = {
  image?: string;
  date?: string;
  title?: string;
  description?: string;
};

export const AnnouncementCard: FC<Props> = async ({
  image = AnnouncementImage,
  date = '12.02.2024',
  title = 'Золоті руки',
  description = `Спільні творчі проекти, з метою подальшого розвитку дрібного бізнесу: навчання
  бісероплетіння, виготовлення сувенірів, свічок, підготовки та участь у ярмарках народної
  творчості. За відповідних умов можливість отримання грантів для розвитку свого бізнесу.`,
}) => {
  return (
    <li className="md:flex md:items-stretch md:gap-x-10">
      <div className="grid gap-y-4 pb-5 md:pb-0">
        <Typography as="span" className="text-sm font-light text-zinc-500">
          {date}
        </Typography>

        <Typography as="h3">{title}</Typography>

        <Typography className="line-clamp-4">{description}</Typography>
      </div>

      <div className="shrink-0 rounded">
        <Image
          src={image}
          alt="new image"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </li>
  );
};
