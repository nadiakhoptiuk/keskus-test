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

const bluredImage = (
  w: number,
  h: number,
) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2001_782)">
<rect width="${w}" height="${h}" transform="translate(80 80)" fill="#F7D747" fill-opacity="0.3"/>
<g filter="url(#filter1_f_2001_782)">
<path d="M679.967 550.95L792.442 486.206L904.949 421.462V550.95V680.47L792.442 615.726L679.967 550.95Z" fill="#FAFAFA" fill-opacity="0.5"/>
<path d="M904.984 680.452L1017.49 615.708L1129.97 550.964V680.452V809.94L1017.49 745.196L904.984 680.452Z" fill="#0A0A0A" fill-opacity="0.5"/>
<path d="M454.982 680.493L342.475 615.75L230 551.006V680.493V809.981L342.475 745.237L454.982 680.493Z" fill="#0A0A0A" fill-opacity="0.5"/>
<path d="M230 550.971L342.507 486.227L455.015 421.483V550.971V680.491L342.507 615.747L230 550.971Z" fill="#2E58A1" fill-opacity="0.5"/>
<path d="M230 809.974L342.507 745.231L455.015 680.487V809.974V939.462L342.507 874.718L230 809.974Z" fill="#2E58A1" fill-opacity="0.5"/>
<path d="M680.011 550.971L567.504 486.227L455.029 421.483V550.971V680.491L567.504 615.747L680.011 550.971Z" fill="#F7D747" fill-opacity="0.3"/>
<path d="M679.967 809.955L792.442 745.211L904.949 680.467V809.955V939.443L792.442 874.699L679.967 809.955Z" fill="#F7D747" fill-opacity="0.3"/>
<path d="M680.011 809.974L567.504 745.231L455.029 680.487V809.974V939.462L567.504 874.718L680.011 809.974Z" fill="#FAFAFA" fill-opacity="0.5"/>
<path d="M1130 550.971L1017.49 486.227L904.984 421.483V550.971V680.491L1017.49 615.747L1130 550.971Z" fill="#2E58A1" fill-opacity="0.5"/>
<path d="M1130 809.935L1017.49 745.191L904.984 680.447V809.935V939.423L1017.49 874.679L1130 809.935Z" fill="#2E58A1" fill-opacity="0.5"/>
<path d="M792.486 356.744L680.137 292.073C680.059 292.028 679.963 292.028 679.885 292.073L567.504 356.744L455.029 421.488L567.504 486.232L680.011 550.975L792.486 486.232L904.993 421.488L792.486 356.744Z" fill="#2E58A1" fill-opacity="0.5"/>
<path d="M792.556 615.708L680.082 550.964L567.574 615.708L455.1 680.452L567.574 745.196L680.082 809.94L792.556 745.196L905.064 680.452L792.556 615.708Z" fill="#2E58A1" fill-opacity="0.5"/>
<path d="M792.556 874.712L680.082 809.968L567.574 874.712L455.1 939.455L567.574 1004.2L680.082 1068.98L792.556 1004.2L905.064 939.455L792.556 874.712Z" fill="#2E58A1" fill-opacity="0.5"/>
</g>
</g>
<defs>
<filter id="filter0_f_2001_782" x="0" y="0" width="${w}" height="${h}" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_2001_782"/>
</filter>
<filter id="filter1_f_2001_782" x="80" y="142.039" width="1200" height="1076.94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_2001_782"/>
</filter>
</defs>
</svg>`;

export const toBase64 = (width: number, height: number) => {
  const bluredString = bluredImage(width, height);

  return typeof window === 'undefined'
    ? Buffer.from(bluredString).toString('base64')
    : window.btoa(bluredString);
};
