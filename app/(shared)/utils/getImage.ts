import { getPlaiceholder } from 'plaiceholder';

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
