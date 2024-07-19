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
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-[244px_244px_244px] 2xl:grid-rows-[291px_291px_291px]">
      {list.map(({ src, heading, imageOrientation, order }, index) => {
        const oddItemClassName = {
          'xl:row-span-2 xl:row-start-1 xl:col-start-1':
            imageOrientation === 'vertical' && order === 1,
          'xl:row-span-2 xl:row-start-1 xl:col-start-2':
            imageOrientation === 'vertical' && order === 2,
          'xl:row-start-1 xl:col-start-3 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 3,
          'xl:row-start-2 xl:col-start-3 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 4,
          'xl:col-start-1 xl:row-start-3 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 5,
          'xl:col-start-2 xl:row-start-3 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 6,
          'xl:col-start-3 xl:row-start-3 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 7,
        };

        const evenItemClassName = {
          'xl:row-span-2 xl:row-start-1 xl:col-start-2':
            imageOrientation === 'vertical' && order === 1,
          'xl:row-span-2 xl:row-start-1 xl:col-start-3':
            imageOrientation === 'vertical' && order === 2,
          'xl:row-start-1 xl:row-span-1 xl:col-start-1 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 3,
          'xl:row-start-2 xl:row-span-1 xl:col-start-1 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 4,
          'xl:col-start-1 xl:row-start-3 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 5,
          'xl:col-start-2 xl:row-start-3 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 6,
          'xl:col-start-3 xl:row-start-3 xl:row-span-1':
            imageOrientation === 'horizontal' && order === 7,
        };

        return (
          <div
            key={index}
            className={classnames(
              position === 'even' ? evenItemClassName : oddItemClassName,
              ' overflow-x-hidden',
            )}
          >
            <Image
              src={src}
              alt={heading}
              width={600}
              height={500}
              className="h-full w-full object-cover object-top"
            />
          </div>
        );
      })}
    </div>
  );
};
