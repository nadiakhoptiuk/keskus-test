import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import NewsImage from '@/public/images/news.jpg';

type Props = {
  locale: LocaleEnum;
  image?: string;
  date?: string;
  title?: string;
  description?: string;
  link?: string;
};

export const NewsCard: FC<Props> = async ({
  locale,
  image = NewsImage,
  date = '12.02.2024',
  title = 'Золоті руки',
  description = `Спільні творчі проекти, з метою подальшого розвитку дрібного бізнесу: навчання
  бісероплетіння, виготовлення сувенірів, свічок, підготовки та участь у ярмарках народної
  творчості. За відповідних умов можливість отримання грантів для розвитку свого бізнесу.`,
  link = RoutesEnum.HOME,
}) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <li>
      <div className="rounded">
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

      <div className="grid gap-y-4 pt-5">
        <Typography as="span" className="text-sm font-light text-zinc-500">
          {date}
        </Typography>

        <Typography as="h3">{title}</Typography>

        <Typography className="line-clamp-4">{description}</Typography>

        <Link
          className="base-transition ml-auto inline-flex items-center gap-x-1 hover:text-blue-600 focus:text-blue-600"
          href={link}
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
