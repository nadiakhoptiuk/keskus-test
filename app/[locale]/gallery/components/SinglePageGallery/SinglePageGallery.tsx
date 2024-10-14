'use client';
import { FC, useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import 'photoswipe/style.css';

import { SinglePageGalleryItem } from '../SinglePageGalleryItem';

import { GalleryItemWithBlurType } from '@/app/(shared)/types/common.types';

import s from '../../GalleryPage.module.css';

type Props = {
  data: GalleryItemWithBlurType[];
};

export const SinglePageGallery: FC<Props> = ({ data }) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: PhotoSwipe,
      showHideAnimationType: 'fade',
      wheelToZoom: true,
      loop: false,
      padding: { top: 160, bottom: 160, left: 50, right: 50 },
    });

    lightbox.on('uiRegister', function () {
      if (!lightbox.pswp || !lightbox?.pswp?.ui) return;

      lightbox.pswp.ui.registerElement({
        order: 9,
        isButton: false,
        appendTo: 'root',
      });
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <ul className={s.galleryGrid} id="gallery">
        {data.map(
          ({
            id,
            alt,
            image: {
              data: {
                attributes: { url, width, height },
              },
            },
            blurDataUrl,
          }) => (
            <SinglePageGalleryItem
              key={id}
              alt={alt}
              url={url}
              width={width}
              height={height}
              blurDataUrl={blurDataUrl}
            />
          ),
        )}
      </ul>
    </>
  );
};
