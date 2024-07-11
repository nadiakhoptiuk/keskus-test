import { FC } from 'react';
import Image from 'next/image';
import { classnames } from '@/app/(shared)/utils/classnames';

import { TestGalleryItem } from './TestGallery.types';

type Props = {
  list: TestGalleryItem[];
  position: 'even' | 'odd';
};

export const TestGalleryBlock: FC<Props> = ({ list, position }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-[244px_244px_244px] gap-8">
      {list.map(({ src, heading, imageOrientation, order }, index) => {
        const oddItemClassName = {
          'row-span-2 row-start-1 row-end-2 col-start-1':
            imageOrientation === 'vertical' && order === 1,
          'row-span-2 row-start-1 row-end-2 col-start-2':
            imageOrientation === 'vertical' && order === 2,
          'row-start-1 row-span-1 col-start-3 row-span-1':
            imageOrientation === 'horizontal' && order === 3,
          'row-start-2 row-span-1 col-start-3 row-span-1':
            imageOrientation === 'horizontal' && order === 4,
          'col-start-1 row-start-3 row-span-1': imageOrientation === 'horizontal' && order === 5,
          'col-start-2 row-start-3 row-span-1': imageOrientation === 'horizontal' && order === 6,
          'col-start-3 row-start-3 row-span-1': imageOrientation === 'horizontal' && order === 7,
        };

        const evenItemClassName = {
          'row-span-2 row-start-1 row-end-2 col-start-2':
            imageOrientation === 'vertical' && order === 1,
          'row-span-2 row-start-1 row-end-2 col-start-3':
            imageOrientation === 'vertical' && order === 2,
          'row-start-1 row-span-1 col-start-1 row-span-1':
            imageOrientation === 'horizontal' && order === 3,
          'row-start-2 row-span-1 col-start-1 row-span-1':
            imageOrientation === 'horizontal' && order === 4,
          'col-start-1 row-start-3 row-span-1': imageOrientation === 'horizontal' && order === 5,
          'col-start-2 row-start-3 row-span-1': imageOrientation === 'horizontal' && order === 6,
          'col-start-3 row-start-3 row-span-1': imageOrientation === 'horizontal' && order === 7,
        };

        return (
          <div
            key={index}
            className={classnames(position === 'even' ? evenItemClassName : oddItemClassName)}
          >
            <Image src={src} alt={heading} width={600} height={500} />
          </div>
        );
      })}
    </div>
  );
};
