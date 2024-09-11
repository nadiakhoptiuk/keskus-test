import { FC } from 'react';

import { GalleryItem } from '@/app/[locale]/gallery/components/GalleryItem';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { SingleGalleryEventItemTypeWithId } from '@/app/(shared)/types/common.types';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

import s from '../../GalleryPage.module.css';

type Props = {
  data: SingleGalleryEventItemTypeWithId[];
  locale: LocaleEnum;
};

export const Gallery: FC<Props> = async ({ data, locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.COMMON]);

  return (
    <>
      {data.length > 0 ? (
        <ul className={s.galleryGrid}>
          {data.map(
            ({
              id,
              attributes: {
                title,
                slug,
                main_image: {
                  alt,
                  image: {
                    data: {
                      attributes: { url },
                    },
                  },
                },
                gallery,
              },
            }) => (
              <GalleryItem
                key={id}
                alt={alt}
                title={title}
                image={url}
                locale={locale}
                link={`${RoutesEnum.GALLERY}/${slug}`}
                galleryLength={gallery.length}
              />
            ),
          )}
        </ul>
      ) : (
        <Typography as="p">{t('no_gallery_events')}</Typography>
      )}
    </>
  );
};
