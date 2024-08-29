import { Metadata } from 'next';
import { Events } from './components/Events';

import { fetchEventsPage } from '@/requests/fetchEventsPage';
import { availableEventsDates } from '@/app/(shared)/utils/availableEventsDates';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { TranslationsProvider } from '@/app/i18n/extensions/TranslationsProvider';
import { generatePageMetaData } from '@/app/(shared)/utils/generatePageMetaData';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { PageNameVariableEnum, RoutesEnum } from '@/app/(shared)/types/enums';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const args = {
    locale,
    pageName: PageNameVariableEnum.EVENTS,
    route: RoutesEnum.EVENTS,
  };

  return await generatePageMetaData(args);
};

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
        btnTodayLabel={t('btn_today')}
      />
    </TranslationsProvider>
  );
}
