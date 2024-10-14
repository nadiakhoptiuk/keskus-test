import { getPlaiceholder } from 'plaiceholder';
import { GalleryItemType } from '../types/common.types';

export async function getImageBlurData(source: string) {
  const buffer = await fetch(source).then(async result => Buffer.from(await result.arrayBuffer()));

  const {
    metadata: { height, width },
    ...placeholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...placeholder,
    img: { src: source, height, width },
  };
}

export const getAllImagesWithBlurData = async (data: GalleryItemType[]) => {
  return await Promise.all(
    data.map(async (photo: GalleryItemType) => {
      const { base64 } = await getImageBlurData(photo.image.data.attributes.url);

      return { ...photo, blurDataUrl: base64 };
    }),
  );
};
