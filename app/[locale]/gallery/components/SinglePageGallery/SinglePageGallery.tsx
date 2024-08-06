import { FC } from 'react';

import { SinglePageGalleryItem } from '../SinglePageGalleryItem';

import { GalleryItemType } from '@/app/(shared)/types/common.types';

type Props = {
  data: GalleryItemType[];
};

export const SinglePageGallery: FC<Props> = ({ data }) => {
  return (
    <ul className="gallery-grid">
      {data.map(
        ({
          id,
          alt,
          image: {
            data: {
              attributes: { url },
            },
          },
        }) => (
          <SinglePageGalleryItem key={id} alt={alt} url={url} />
        ),
      )}
    </ul>
  );
};
