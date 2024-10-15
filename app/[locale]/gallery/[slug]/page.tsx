import { Metadata } from 'next';

import notFound from '@/app/[locale]/[not-found]/page';
import { SinglePageWrapper } from '@/app/(shared)/components/ui/SinglePageWrapper';
import { SinglePageGallery } from '../components/SinglePageGallery';

import { fetchAllGalleryEventsSlugs } from '@/requests/fetchAllGalleryEventsSlugs';
import { fetchSingleGalleryEvent } from '@/requests/fetchSingleGalleryEvent';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { generatePageMetaData } from '@/app/(shared)/utils/generatePageMetaData';
import { getAllImagesWithBlurData } from '@/app/(shared)/utils/getImage';

import { PageProps } from '@/app/(shared)/types/common.types';
import { LocaleEnum, PageNameVariableEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

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
}: PageProps): Promise<Metadata> => {
  const args = {
    locale,
    pageName: PageNameVariableEnum.GALLERY,
    route: `${RoutesEnum.GALLERY}/${slug}`,
  };

  return await generatePageMetaData(args);
};

export default async function Page({ params: { locale, slug } }: PageProps) {
  if (!slug) return null;
  const pageData = await fetchSingleGalleryEvent(locale, slug);
  if (!pageData) return notFound({ params: { locale: locale } });

  const { title, gallery } = pageData;

  const imagesWithBlurDataUrl = await getAllImagesWithBlurData(gallery);

  const { t } = await initTranslations(locale, [i18nNamespaces.GALLERY]);

  return (
    <SinglePageWrapper goBackLink={RoutesEnum.GALLERY} linkText={t('goBack')}>
      <h1 className="single-page-title">{title}</h1>

      {imagesWithBlurDataUrl && imagesWithBlurDataUrl.length > 0 && (
        <SinglePageGallery data={imagesWithBlurDataUrl} />
      )}
    </SinglePageWrapper>
  );
}
