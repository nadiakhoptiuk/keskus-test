import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { NewsCardType } from './NewsCard.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { useTranslation } from 'react-i18next';

type Props = {
  locale: LocaleEnum;
  card: NewsCardType;
};

export const NewsCard: FC<Props> = ({ card }) => {
  const { t } = useTranslation([i18nNamespaces.NEWS]);
  const { image, date, title, description, slug } = card;

  return (
    <li>
      <div className="rounded">
        <Image
          src={image}
          alt="new image"
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
        <Typography as="span" className="text-sm font-light text-zinc-500">
          {date}
        </Typography>

        <Typography as="h3">{title}</Typography>

        <Typography className="line-clamp-4">{description}</Typography>

        <Link
          className="base-transition ml-auto inline-flex items-center gap-x-1 hover:text-blue-600 focus:text-blue-600"
          href={`${RoutesEnum.NEWS}/${slug}`}
        >
          <Typography className="text-inherit" as="span">
            {t('readMore')}
          </Typography>

          <CustomIcon className="-rotate-90 text-blue-600" icon="arrow-sm" />
        </Link>
      </div>
    </li>
  );
};
