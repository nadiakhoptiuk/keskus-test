import { Metadata } from 'next';

import { Announcement } from '@/app/[locale]/components/Announcement';
import { Hero } from '@/app/[locale]/components/Hero';
import { News } from '@/app/[locale]/components/News';
import { Scroller } from '@/app/[locale]/components/Scroller';
import { Support } from '@/app/[locale]/components/Support';

import { fetchMetaData } from '@/requests/fetchMetaData';
import { fetchHomePage } from '@/requests/fetchHomePage';
import { availableIrregularEventsDates } from '../(shared)/utils/availableEventsDates';
import { initTranslations } from '../i18n/extensions/initTranslations';
import { transformMetaFacebook, transformMetaTwitter } from '../(shared)/utils/transformMeta';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '../(shared)/types/i18n.types';
import { LocaleEnum, PageNameVariableEnum } from '../(shared)/types/enums';
import { languages } from '../(shared)/utils/constants';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const metaData = await fetchMetaData(locale, PageNameVariableEnum.HOME);

  const { t } = await initTranslations(locale, [i18nNamespaces.METADATA]);
  const defaultMeta: Metadata = t('meta', { returnObjects: true });

  if (!metaData) {
    return {
      ...defaultMeta,
      alternates: {
        canonical: `${baseUrl}/${locale === LocaleEnum.UK ? '' : locale}`,
        languages: languages,
      },
    };
  }

  const { metaTitle: title, metaDescription: description, metaImage, keywords } = metaData;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale === LocaleEnum.UK ? '' : locale}`,
      languages: languages,
    },
    keywords,
    twitter: transformMetaTwitter(metaImage, title, description),
    openGraph: transformMetaFacebook(metaImage, title, description, baseUrl, locale),
  };
};

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchHomePage(locale);

  if (!pageData) return null;

  const { t } = await initTranslations(locale, [i18nNamespaces.COMMON]);

  const {
    homepage: {
      page_title,
      hero_text,
      hero_button,
      financial_support_subtitle,
      financial_support_text,
      announcement_subtitle,
      announcement_button_all_events,
    },
    tabPanels,
    irregularActivities,
  } = pageData;

  const availableDatesAtCalendar = availableIrregularEventsDates(irregularActivities);

  return (
    <>
      <Hero locale={locale} pageTitle={page_title} text={hero_text} buttonText={hero_button} />

      <Scroller />

      <Support
        locale={locale}
        title={financial_support_subtitle}
        text={financial_support_text}
        tabsData={tabPanels}
      />

      <Announcement
        locale={locale}
        title={announcement_subtitle}
        btnToday={t('btn_today')}
        allEventsBtnText={announcement_button_all_events}
        allIrregularActivities={irregularActivities}
        availableDatesAtCalendar={availableDatesAtCalendar}
        readMoreText={t('read_more_btn')}
      />

      <News locale={locale} />
    </>
  );
}
