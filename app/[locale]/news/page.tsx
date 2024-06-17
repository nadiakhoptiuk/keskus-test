import { Container } from '@/app/(shared)/components/ui/Container';
import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section>
      <Container>
        <Typography as="h1" className="mb-10 md:mb-15 ">
          {t('news')}
        </Typography>

        <NewsList
          className="gap-x-8 gap-y-10 md:gap-y-15"
          locale={locale}
          data={Array.from({ length: 9 })}
        />
      </Container>
    </Section>
  );
}
