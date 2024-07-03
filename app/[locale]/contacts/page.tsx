import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { ContactsList } from '@/app/(shared)/components/ui/ContactsList';
import { FoundersList } from './components/FoundersList';
import { GeneralInfo } from './components/GeneralInfo';
import { FounderCardType } from './components/FounderCard/FounderCard.types';
import { SendSuggestions } from './components/SendSuggestions';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { ContactItemType } from '@/app/(shared)/components/ui/ContactItem/ContactItem.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.CONTACTS]);
  const address: ContactItemType[] = t('address', { returnObjects: true });
  const founders: FounderCardType[] = t('founders', { returnObjects: true });

  return (
    <Section fixedWith={true} className="contacts-section py-10 md:py-15 xl:pt-[84px]">
      <Container>
        <Typography as="h1" className="mb-10 text-left text-zinc-50 md:mb-15 xl:mb-[10px]">
          {t('title')}
        </Typography>

        <ContactsList list={address} className="max-md:mb-15 md:mb-32 xl:mb-[104px]" />
        <FoundersList list={founders} />
        <GeneralInfo locale={locale} />
        <SendSuggestions locale={locale} />
      </Container>
    </Section>
  );
}
