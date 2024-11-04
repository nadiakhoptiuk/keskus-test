/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { getImageBlurData } from '@/app/(shared)/utils/getImage';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';

import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

import s from '../../GalleryPage.module.css';

type Props = {
  title: string;
  alt: string;
  link: string;
  image: string;
  locale: LocaleEnum;
  galleryLength: number;
};

export const GalleryItem: FC<Props> = async ({
  title,
  alt,
  image,
  locale,
  link = RoutesEnum.HOME,
  galleryLength,
}) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.GALLERY]);
  const base64 = await getImageBlurData(image);

  return (
    <li className={`${s.galleryItem} group relative overflow-hidden shadow-sm`} tabIndex={0}>
      <Image
        className="relative z-0 aspect-square h-full w-full object-cover"
        src={image}
        placeholder="blur"
        blurDataURL={base64}
        alt={alt}
        width={700}
        height={400}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
      />

      <div className="base-transition absolute inset-0 z-10 h-full w-full translate-y-full bg-black bg-opacity-85 p-5 text-zinc-50 opacity-0 transition-[opacity,transform] group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
        <div className="flex h-full flex-col">
          <h2 className="max-w-[280px] text-balance font-fixel text-xl font-bold">{title}</h2>

          {galleryLength > 0 && (
            <Link
              className="base-transition ml-auto mt-auto inline-flex items-center gap-x-1 text-base font-medium hocus:text-yellow-400"
              href={link}
            >
              {t('watchAllPhotos')}

              <CustomIcon className="-rotate-90 text-yellow-400" icon="arrow-sm" />
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};
