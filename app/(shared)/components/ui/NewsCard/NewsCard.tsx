import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { format } from 'date-fns';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { RoutesEnum } from '@/app/(shared)/types/enums';
import { SingleNewDataType } from '@/app/(shared)/types/common.types';

type Props = {
  card: SingleNewDataType;
  readMoreText: string;
  Tag?: 'li' | 'div';
};

export const NewsCard: FC<Props> = async ({ card, readMoreText, Tag = 'div' }) => {
  const {
    attributes: {
      title,
      slug,
      // date,
      image: {
        alt,
        image: {
          data: {
            attributes: { url },
          },
        },
      },
      content,
    },
  } = card;

  return (
    <Tag>
      <div className="rounded">
        <Image
          src={url}
          alt={alt}
          width={384}
          height={320}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div className="grid gap-y-4 pt-5">
        {/* <Typography as="span" className="text-sm font-light text-zinc-500">
          {format(new Date(date), 'd.MM.y')}
        </Typography> */}

        <Typography as="h3">{title}</Typography>

        <Typography className="line-clamp-4">{content}</Typography>

        <Link
          className="base-transition ml-auto inline-flex items-center gap-x-1 hover:text-blue-600 focus:text-blue-600"
          href={`${RoutesEnum.NEWS}/${slug}`}
        >
          <Typography className="text-inherit" as="span">
            {readMoreText}
          </Typography>

          <CustomIcon className="-rotate-90 text-blue-600" icon="arrow-sm" />
        </Link>
      </div>
    </Tag>
  );
};
