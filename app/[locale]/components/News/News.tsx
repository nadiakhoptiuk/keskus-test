import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { fetchLastThreeNews } from '@/requests/fetchLastThreeNews';
import { LocaleEnum } from '@/app/(shared)/types/enums';

type Props = {
  locale: LocaleEnum;
};

export const News: FC<Props> = async ({ locale }) => {
  const newsSectionData = await fetchLastThreeNews(locale);
  if (!newsSectionData) return null;

  const {
    generalInfo: { page_title: sectionTitle, read_more_button },
    lastThreeNews,
  } = newsSectionData;

  return (
    <Section>
      <Container>
        <Typography as="h2" className="mb-10 md:mb-15">
          {sectionTitle}
        </Typography>

        <NewsList data={lastThreeNews} readMoreText={read_more_button} />
      </Container>
    </Section>
  );
};
