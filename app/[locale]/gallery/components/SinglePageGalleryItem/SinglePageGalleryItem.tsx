import { FC } from 'react';
import Image from 'next/image';

import s from '../../GalleryPage.module.css';

type Props = {
  alt: string;
  url: string;
  width: number;
  height: number;
  blurDataUrl: string;
};

export const SinglePageGalleryItem: FC<Props> = ({ alt, url, width, height, blurDataUrl }) => {
  return (
    <li className={`${s.galleryItem} overflow-hidden shadow-sm`}>
      <a href={url} data-pswp-width={width} data-pswp-height={height}>
        <Image
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="h-full w-full object-cover"
          src={url}
          width={2880}
          height={2200}
          alt={alt}
        />
      </a>
    </li>
  );
};
