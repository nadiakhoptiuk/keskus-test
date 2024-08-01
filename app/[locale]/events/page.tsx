import { Events } from './components/Events';

import { fetchEventsPage } from '@/requests/fetchEventsPage';

import { PageProps } from '@/app/(shared)/types/common.types';

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchEventsPage(locale);
  if (!pageData) return null;

  const { generalInfo, activities } = pageData;

  return <Events generalInfo={generalInfo} activities={activities} />;
}
