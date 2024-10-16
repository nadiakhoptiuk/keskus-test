'use client';
import { FC } from 'react';
import Image from 'next/image';

import s from '../../GalleryPage.module.css';

type Props = {
  alt: string;
  url: string;
  width: number;
  height: number;
};

export const SinglePageGalleryItem: FC<Props> = ({ alt, url, width, height }) => {
  return (
    <li className={`${s.galleryItem} overflow-hidden bg-slate-200 shadow-sm`}>
      <a href={url} data-pswp-width={width} data-pswp-height={height}>
        <Image
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
