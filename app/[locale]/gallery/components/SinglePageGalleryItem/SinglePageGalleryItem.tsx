import { FC } from 'react';
import Image from 'next/image';

type Props = {
  alt: string;
  url: string;
};

export const SinglePageGalleryItem: FC<Props> = ({ alt, url }) => {
  return (
    <li className="gallery-item overflow-hidden shadow-sm">
      <Image className="h-full w-full object-cover" src={url} width={700} height={400} alt={alt} />
    </li>
  );
};
