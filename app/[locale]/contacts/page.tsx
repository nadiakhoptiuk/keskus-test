import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { ContactsList } from '@/app/[locale]/contacts/components/ContactsList';
import { FoundersList } from './components/FoundersList';
import { GeneralInfo } from './components/GeneralInfo';
import { SendSuggestions } from './components/SendSuggestions';

import { fetchContactsPage } from '@/requests/fetchContactsPage';

import { PageProps } from '@/app/(shared)/types/common.types';

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchContactsPage(locale);
  if (!pageData) return null;

  const { page_title, contacts, text_description, contact_us_text_yellow_block } = pageData;

  return (
    <Section fixedWith={true} className="contacts-section py-10 md:py-15 xl:pt-[84px]">
      <Container>
        <Typography as="h1" className="mb-10 text-left text-zinc-50 md:mb-15 xl:mb-[10px]">
          {page_title}
        </Typography>

        <ContactsList list={contacts} className="max-md:mb-15 md:mb-32 xl:mb-[104px]" />
        <FoundersList locale={locale} />
        <GeneralInfo locale={locale} text={text_description} />
        <SendSuggestions text={contact_us_text_yellow_block} contacts={contacts} />
      </Container>
    </Section>
  );
}
