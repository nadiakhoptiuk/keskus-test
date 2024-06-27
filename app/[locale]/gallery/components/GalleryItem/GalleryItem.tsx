/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';

type Props = {
  title?: string;
  link: string;
  image: string;
  locale: LocaleEnum;
  onlyImage?: boolean;
};

export const GalleryItem: FC<Props> = async ({
  title = 'Кінопоказ фільму "Культура проти війни". Річниця Українського кіноклубу в Естонії',
  image,
  locale,
  link = RoutesEnum.HOME,
  onlyImage = false,
}) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.GALLERY]);

  if (onlyImage)
    return (
      <li className="overflow-hidden shadow-sm">
        <Image
          className="aspect-square h-full w-full object-cover"
          src={image}
          width={700}
          height={400}
          alt="gallery item"
        />
      </li>
    );

  return (
    <li className="group relative overflow-hidden shadow-sm" tabIndex={0}>
      <Image
        className="relative z-0 aspect-square h-full w-full object-cover"
        src={image}
        width={700}
        height={400}
        alt="gallery item"
      />

      <div className="base-transition absolute inset-0 z-10 h-full w-full translate-y-full bg-black bg-opacity-85 p-5 text-zinc-50 opacity-0 transition-[opacity,transform] group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
        <div className="flex h-full flex-col">
          <h2 className="max-w-[280px] text-balance font-fixel text-xl font-bold">{title}</h2>

          <Link
            className="base-transition ml-auto mt-auto inline-flex items-center gap-x-1 text-base font-medium hover:text-yellow-400 focus:text-yellow-400"
            href={link}
          >
            {t('watchAllPhotos')}

            <CustomIcon className="-rotate-90 text-yellow-400" icon="arrow-sm" />
          </Link>
        </div>
      </div>
    </li>
  );
};
