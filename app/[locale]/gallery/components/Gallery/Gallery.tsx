import { FC } from 'react';

import { GalleryItem } from '@/app/[locale]/gallery/components/GalleryItem';

import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { TestGalleryItem } from '../TestGallery/TestGallery.types';

type Props = {
  data: TestGalleryItem[];
  locale: LocaleEnum;
  onlyImage?: boolean;
};

export const Gallery: FC<Props> = ({ data, locale, onlyImage = false }) => {
  return (
    <ul className="gallery-grid">
      {data.map(({ src, heading }, index) => (
        <GalleryItem
          key={index}
          title={heading}
          image={src}
          locale={locale}
          link={`${RoutesEnum.GALLERY}/${index + 1}`}
          onlyImage={onlyImage}
        />
      ))}
    </ul>
  );
};
