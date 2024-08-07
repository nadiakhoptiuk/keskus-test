import { FC } from 'react';
import Image from 'next/image';

type Props = {
  alt: string;
  url: string;
  width: number;
  height: number;
};

export const SinglePageGalleryItem: FC<Props> = ({ alt, url, width, height }) => {
  return (
    <li className="gallery-item overflow-hidden shadow-sm">
      <a href={url} data-pswp-width={width} data-pswp-height={height}>
        <Image
          className="h-full w-full object-cover"
          src={url}
          width={width}
          height={height}
          alt={alt}
        />
      </a>
    </li>
  );
};
