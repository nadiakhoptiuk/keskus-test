import { PageProps } from '@/app/(shared)/types/common.types';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';

import { fetchNewsPage } from '@/requests/fetchNewsPage';

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchNewsPage(locale);

  if (!pageData) return null;

  const {
    newspage: { page_title, read_more_button },
    news,
  } = pageData;

  return (
    <Section>
      <Container>
        <Typography as="h1" className="mb-10 md:mb-15 ">
          {page_title}
        </Typography>

        <NewsList
          readMoreText={read_more_button}
          data={news}
          className="gap-x-8 gap-y-10 md:gap-y-15"
        />
      </Container>
    </Section>
  );
}
