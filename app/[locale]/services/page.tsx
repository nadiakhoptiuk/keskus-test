import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { ServicesList } from './components/ServicesList';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { ServiceCardType } from './components/ServiceCard/ServiceCard.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.SERVICES]);
  const services: ServiceCardType[] = t('services', { returnObjects: true });

  return (
    <Section className="py-10 md:py-15 xl:pt-[84px]">
      <Container>
        <Typography as="h1" className="mb-10 text-left text-black md:mb-15">
          {t('title')}
        </Typography>

        <ServicesList services={services} />
      </Container>
    </Section>
  );
}
