import { Metadata } from 'next';

import notFound from '@/app/[locale]/[not-found]/page';
import { SinglePageWrapper } from '@/app/(shared)/components/ui/SinglePageWrapper';
import { SinglePageGallery } from '../components/SinglePageGallery';

import { fetchAllGalleryEventsSlugs } from '@/requests/fetchAllGalleryEventsSlugs';
import { fetchSingleGalleryEvent } from '@/requests/fetchSingleGalleryEvent';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { generateSinglePageMetaData } from '@/app/(shared)/utils/generatePageMetaData';

import { PageProps, SinglePageProps } from '@/app/(shared)/types/common.types';
import {
  ChapterNameVariableEnum,
  LocaleEnum,
  RoutesEnum,
  SinglePageNameVariableEnum,
} from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { transformArrayOfImagesWithBlur } from '@/app/(shared)/utils/getImage';

// eslint-disable-next-line unicorn/prevent-abbreviations
export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: LocaleEnum };
}): Promise<Array<{ locale: LocaleEnum; slug: string }>> {
  const galleryEventsSlugsData = await fetchAllGalleryEventsSlugs(locale);

  return galleryEventsSlugsData.map(galleryEvent => {
    return {
      locale: locale,
      slug: galleryEvent.slug,
    };
  });
}

export const generateMetadata = async ({
  params: { locale, slug },
}: SinglePageProps): Promise<Metadata> => {
  const args = {
    locale,
    pageName: SinglePageNameVariableEnum.GALLERY,
    route: `${RoutesEnum.GALLERY}/${slug}`,
    chapterName: ChapterNameVariableEnum.GALLERY,
    slug,
  };

  return await generateSinglePageMetaData(args);
};

export default async function Page({ params: { locale, slug } }: PageProps) {
  if (!slug) return null;
  const pageData = await fetchSingleGalleryEvent(locale, slug);
  if (!pageData) return notFound({ params: { locale: locale } });

  const { title, gallery } = pageData;

  const galleryWithBlurData = transformArrayOfImagesWithBlur(gallery);

  const { t } = await initTranslations(locale, [i18nNamespaces.GALLERY]);

  return (
    <SinglePageWrapper goBackLink={RoutesEnum.GALLERY} linkText={t('goBack')}>
      <h1 className="single-page-title">{title}</h1>

      {gallery && gallery.length > 0 && <SinglePageGallery data={galleryWithBlurData} />}
    </SinglePageWrapper>
  );
}
