import { FC } from 'react';

import { GalleryItem } from '@/app/[locale]/gallery/components/GalleryItem';

import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';

type Props = {
  data: unknown[];
  locale: LocaleEnum;
  onlyImage?: boolean;
};

export const Gallery: FC<Props> = ({ data, locale, onlyImage = false }) => {
  return (
    <ul className="base-grid">
      {data.map((_, index) => (
        <GalleryItem
          key={index}
          image={`https://picsum.photos/seed/${index}/700/400`}
          locale={locale}
          link={`${RoutesEnum.GALLERY}/${index + 1}`}
          onlyImage={onlyImage}
        />
      ))}
    </ul>
  );
};
