import { Announcement } from '@/app/[locale]/components/Announcement';
import { Hero } from '@/app/[locale]/components/Hero';
import { News } from '@/app/[locale]/components/News';
import { Scroller } from '@/app/[locale]/components/Scroller';
import { Support } from '@/app/[locale]/components/Support';

import { fetchHomePage } from '@/requests/fetchHomePage';
import { availableIrregularEventsDates } from '../(shared)/utils/availableEventsDates';

import { PageProps } from '@/app/(shared)/types/common.types';

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchHomePage(locale);

  if (!pageData) return null;

  const {
    homepage: {
      page_title,
      hero_text,
      hero_button,
      financial_support_subtitle,
      financial_support_text,
      announcement_subtitle,
      announcement_button_today,
      announcement_button_all_events,
    },
    irregularActivities,
  } = pageData;

  const availableDatesAtCalendar = availableIrregularEventsDates(irregularActivities);

  return (
    <>
      <Hero locale={locale} pageTitle={page_title} text={hero_text} buttonText={hero_button} />

      <Scroller />

      <Support title={financial_support_subtitle} text={financial_support_text} />

      <Announcement
        locale={locale}
        title={announcement_subtitle}
        btnToday={announcement_button_today}
        allEventsBtnText={announcement_button_all_events}
        allIrregularActivities={irregularActivities}
        availableDatesAtCalendar={availableDatesAtCalendar}
      />

      <News locale={locale} />
    </>
  );
}
