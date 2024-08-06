import { FC } from 'react';

import { GalleryItem } from '@/app/[locale]/gallery/components/GalleryItem';

import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { SingleGalleryEventItemTypeWithId } from '@/app/(shared)/types/common.types';

type Props = {
  data: SingleGalleryEventItemTypeWithId[];
  locale: LocaleEnum;
};

export const Gallery: FC<Props> = ({ data, locale }) => {
  return (
    <ul className="gallery-grid">
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
  );
};
