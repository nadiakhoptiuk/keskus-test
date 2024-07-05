import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { VacanciesList } from './VacanciesList/VacanciesList';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { ButtonInfoType, VacancyItemType } from './components/VacancyItem/VacancyItem.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.VACANCIES]);
  const vacancies: VacancyItemType[] = t('vacancies', { returnObjects: true });
  const buttons: ButtonInfoType[] = t('buttons', { returnObjects: true });

  return (
    <Section fixedWith={true} className="vacancies-section pb-10 pt-[30px] md:py-15 xl:pt-[84px]">
      <Container>
        <div className="mb-15 h-[398px] md:mb-25 md:h-[308px] xl:h-[284px]">
          <Typography as="h1" className="mb-10 text-left text-black">
            {t('title')}
          </Typography>

          <Typography
            as="p"
            className="mb-10 max-w-[320px] text-left text-black md:max-w-[500px] xl:max-w-[696px]"
          >
            {t('description')}
          </Typography>
        </div>

        <VacanciesList vacancies={vacancies} buttonsData={buttons} />
      </Container>
    </Section>
  );
}
