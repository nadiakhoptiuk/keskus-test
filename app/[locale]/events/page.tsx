import { Events } from './components/Events';

import { fetchEventsPage } from '@/requests/fetchEventsPage';
import { availableEventsDates } from '@/app/(shared)/utils/availableEventsDates';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { TranslationsProvider } from '@/app/i18n/extensions/TranslationsProvider';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchEventsPage(locale);
  const { t, resources } = await initTranslations(locale, [i18nNamespaces.COMMON]);
  if (!pageData) return null;

  const { generalInfo, activities } = pageData;

  const datesForCalendar = availableEventsDates(activities);

  return (
    <TranslationsProvider
      namespaces={[i18nNamespaces.COMMON]}
      locale={locale}
      resources={resources}
    >
      <Events
        generalInfo={generalInfo}
        activities={activities}
        locale={locale}
        datesForCalendar={datesForCalendar}
        btnTodayLabel={t('btnToday')}
      />
    </TranslationsProvider>
  );
}
