import { Container } from '@/app/(shared)/components/ui/Container';
import { Gallery } from '@/app/[locale]/gallery/components/Gallery';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { PageProps } from '@/app/(shared)/types/common.types';
import { fetchGalleryPage } from '@/requests/fetchGalleryPage';

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchGalleryPage(locale);
  if (!pageData) return null;

  const { page_title, gallery } = pageData;

  return (
    <Section>
      <Container>
        <Typography as="h1" className="mb-10 text-center md:mb-15">
          {page_title}
        </Typography>

        <Gallery data={gallery} locale={locale} />
      </Container>
    </Section>
  );
}
