import { Metadata } from 'next';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { ServicesList } from './components/ServicesList';

import { fetchServicesPage } from '@/requests/fetchServicesPage';
import { generatePageMetaData } from '@/app/(shared)/utils/generatePageMetaData';

import { PageProps } from '@/app/(shared)/types/common.types';
import { PageNameVariableEnum, RoutesEnum } from '@/app/(shared)/types/enums';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const args = {
    locale,
    pageName: PageNameVariableEnum.SUPPORT,
    route: RoutesEnum.SUPPORT,
  };

  return await generatePageMetaData(args);
};

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchServicesPage(locale);
  if (!pageData) return null;

  const { page_title, services_cards } = pageData;

  return (
    <Section className="py-10 md:py-15 xl:pt-[84px]">
      <Container>
        <Typography as="h1" className="mb-10 text-left text-black md:mb-15">
          {page_title}
        </Typography>

        <ServicesList services={services_cards} />
      </Container>
    </Section>
  );
}
