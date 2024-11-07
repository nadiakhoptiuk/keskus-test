'use client';

import { FC, useEffect, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import { useInView } from 'react-intersection-observer';

import 'photoswipe/style.css';

import { SinglePageGalleryItem } from '../SinglePageGalleryItem';

import { GalleryItemType } from '@/app/(shared)/types/common.types';

import s from '../../GalleryPage.module.css';

type Props = {
  data: GalleryItemType[];
};

export const SinglePageGallery: FC<Props> = ({ data }) => {
  const [page, setPage] = useState(1);
  const lastPageNumber = Math.ceil(data.length / 7);
  const isLastPage = page === lastPageNumber;
  const [paintedImages, setPaintedImages] = useState<null | GalleryItemType[]>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView === false || isLastPage) return;

    setPage(previous => previous + 1);
  }, [inView, isLastPage]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const filteredImages = data.slice(0, page * 7);

    setPaintedImages(filteredImages);
  }, [data, page]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: PhotoSwipe,
      showHideAnimationType: 'fade',
      wheelToZoom: true,
      loop: false,
      padding: { top: 80, bottom: 80, left: 80, right: 80 },
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
  }, [data]);

  return (
    <>
      <ul className={s.galleryGrid} id="gallery">
        {paintedImages &&
          paintedImages.length > 0 &&
          paintedImages.map(
            ({
              id,
              alt,
              image: {
                data: {
                  attributes: { url, width, height },
                },
              },
            }) => (
              <SinglePageGalleryItem key={id} alt={alt} url={url} width={width} height={height} />
            ),
          )}
      </ul>

      <div className="h-2 w-full" ref={ref}></div>
    </>
  );
};
