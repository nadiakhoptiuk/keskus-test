import { FC } from 'react';

import { TestGalleryItem } from './TestGallery.types';
import { TestGalleryBlock } from './TestGalleryBlock';

type Props = {
  list: TestGalleryItem[][];
};

export const TestGalleryList: FC<Props> = ({ list }) => {
  return (
    <div className="mb-30 grid grid-cols-1 gap-8">
      {list.map((galleryBlock, index) => {
        return (
          <div key={index}>
            <TestGalleryBlock
              list={galleryBlock}
              position={(index + 1) % 2 === 0 ? 'even' : 'odd'}
            />
          </div>
        );
      })}
    </div>
  );
};
