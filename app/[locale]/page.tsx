import { Metadata } from 'next';

import { Announcement } from '@/app/[locale]/components/Announcement';
import { Hero } from '@/app/[locale]/components/Hero';
import { News } from '@/app/[locale]/components/News';
import { Section } from '../(shared)/components/ui/Section';
import { Scroller } from '@/app/[locale]/components/Scroller';
import { Support } from '@/app/[locale]/components/Support';

import { fetchMetaData } from '@/requests/fetchMetaData';
import { fetchHomePage } from '@/requests/fetchHomePage';
import { availableIrregularEventsDates } from '../(shared)/utils/availableEventsDates';
import { initTranslations } from '../i18n/extensions/initTranslations';
import {
  generateAlternate,
  transformMetaFacebook,
  transformMetaTwitter,
} from '../(shared)/utils/transformMeta';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '../(shared)/types/i18n.types';
import { PageNameVariableEnum, RoutesEnum } from '../(shared)/types/enums';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const metaData = await fetchMetaData(locale, PageNameVariableEnum.HOME);

  const { t } = await initTranslations(locale, [i18nNamespaces.METADATA]);
  const defaultMeta: Metadata = t('meta', { returnObjects: true });

  if (!metaData) {
    return {
      ...defaultMeta,
      alternates: generateAlternate({ locale, baseUrl, route: RoutesEnum.HOME }),
    };
  }

  const { metaTitle: title, metaDescription: description, metaImage, keywords } = metaData;

  return {
    title,
    description,
    alternates: generateAlternate({ locale, baseUrl, route: RoutesEnum.HOME }),
    keywords,
    twitter: transformMetaTwitter({ data: metaImage, title, description, isSinglePage: false }),
    openGraph: transformMetaFacebook({
      data: metaImage,
      title,
      description,
      baseUrl,
      locale,
      route: RoutesEnum.HOME,
      isSinglePage: false,
    }),
  };
};

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchHomePage(locale);

  if (!pageData) return null;

  const { t } = await initTranslations(locale, [i18nNamespaces.COMMON, i18nNamespaces.HOMEPAGE]);

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
    partners,
    tabPanels,
    irregularActivities,
  } = pageData;

  const availableDatesAtCalendar = availableIrregularEventsDates(irregularActivities);

  return (
    <>
      <Hero locale={locale} pageTitle={page_title} text={hero_text} buttonText={hero_button} />

      <Section className="max-md:!h-[180px] md:!h-[260px]">
        <h2 className="visually-hidden">
          {t('partnerSliderHeading', { ns: i18nNamespaces.HOMEPAGE })}
        </h2>
        <Scroller data={partners} />
      </Section>

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
        noAnnouncement={t('no_announcement')}
      />

      <News locale={locale} />
    </>
  );
}
