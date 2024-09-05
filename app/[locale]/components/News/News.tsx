import { FC } from 'react';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { fetchLastThreeNews } from '@/requests/fetchLastThreeNews';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

type Props = {
  locale: LocaleEnum;
};

export const News: FC<Props> = async ({ locale }) => {
  const newsSectionData = await fetchLastThreeNews(locale);
  if (!newsSectionData) return null;

  const { t } = await initTranslations(locale, [i18nNamespaces.COMMON]);

  const {
    generalInfo: { page_title: sectionTitle },
    lastThreeNews,
  } = newsSectionData;

  return (
    <>
      {lastThreeNews.length > 0 && (
        <Section>
          <Container>
            <Typography as="h2" className="mb-10 md:mb-15">
              {sectionTitle}
            </Typography>

            <NewsList data={lastThreeNews} readMoreText={t('read_more_btn')} />
          </Container>
        </Section>
      )}
    </>
  );
};
