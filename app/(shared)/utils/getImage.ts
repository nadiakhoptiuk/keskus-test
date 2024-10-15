import { getPlaiceholder } from 'plaiceholder';
import { GalleryItemType, GalleryItemWithBlurType } from '../types/common.types';

export async function getImageBlurData(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch blurred image: ${response.status} ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    // console.log('base64 >>>', base64);
    return base64;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export const getAllImagesWithBlurData = async (data: GalleryItemType[]) => {
  const base64Promises = data.map((photo: GalleryItemType) =>
    getImageBlurData(photo.image.data.attributes.url),
  );

  const base64Results = await Promise.all(base64Promises);

  return data.map((photo, index) => {
    photo.blurDataUrl = base64Results[index];
    return photo;
  }) as GalleryItemWithBlurType[];

  // return await Promise.all(
  //   data.map(async (photo: GalleryItemType) => {
  //     const { base64 } = await getImageBlurData(photo.image.data.attributes.url);

  //     return { ...photo, blurDataUrl: base64 };
  //   }),
  // );
};
