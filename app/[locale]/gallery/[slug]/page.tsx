import { Gallery } from '@/app/[locale]/gallery/components/Gallery';
import { SinglePageWrapper } from '@/app/(shared)/components/ui/SinglePageWrapper';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { RoutesEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.NEWS]);

  return (
    <SinglePageWrapper goBackLink={RoutesEnum.GALLERY} linkText={t('goBack')}>
      <h1 className="single-page-title">
        {'Кінопоказ фільму "Культура проти війни". Річниця Українського кіноклубу в Естонії'}
      </h1>

      <Gallery data={Array.from({ length: 12 })} locale={locale} onlyImage />
    </SinglePageWrapper>
  );
}
