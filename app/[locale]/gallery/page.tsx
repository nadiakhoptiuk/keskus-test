import { Container } from '@/app/(shared)/components/ui/Container';
import { Gallery } from '@/app/[locale]/gallery/components/Gallery';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { GalleryItemType } from './components/GalleryItem/GalleryItem.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.GALLERY]);
  const gallery: GalleryItemType[] = t('galleryList', { returnObjects: true });

  return (
    <Section>
      <Container>
        <Typography as="h1" className="mb-10 text-center md:mb-15">
          {t('title')}
        </Typography>

        {/* <TestGalleryList list={gallery} /> */}

        <Gallery data={gallery} locale={locale} />
      </Container>
    </Section>
  );
}
