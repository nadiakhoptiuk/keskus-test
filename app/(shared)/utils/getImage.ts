import { getPlaiceholder } from 'plaiceholder';

import { GalleryItemType } from '../types/common.types';

export async function getImageBlurData(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch blurred image: ${response.status} ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export async function getAllImagesWithBlurData(gallery: GalleryItemType[]) {
  const newGallery = [...gallery];

  for (const image of newGallery) {
    const url = image.image.data.attributes.url;

    // eslint-disable-next-line no-await-in-loop
    const blurDataImageUrl = await getImageBlurData(url);
    image.blurDataUrl = blurDataImageUrl;
  }

  return newGallery;
}
