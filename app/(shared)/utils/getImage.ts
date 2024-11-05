import { getPlaiceholder } from 'plaiceholder';

import { GalleryItemType } from '../types/common.types';

export const transformImageUrlWithBlur = (url: string) => {
  const indexOfUploadString = url.indexOf('upload/');

  if (indexOfUploadString === -1) return url;

  const firstPartOfString = url.slice(0, indexOfUploadString + 7);
  const secondPartOfString = url.slice(indexOfUploadString + 7);

  return firstPartOfString + 'e_blur:2000/' + secondPartOfString;
};

export const transformArrayOfImagesWithBlur = (gallery: GalleryItemType[]) => {
  const newGallery = [...gallery];

  for (const image of newGallery) {
    const url = image.image.data.attributes.url;

    image.blurDataUrl = transformImageUrlWithBlur(url);
  }

  return newGallery;
};

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
