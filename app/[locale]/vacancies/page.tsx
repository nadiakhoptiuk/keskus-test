import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { VacanciesList } from './components/VacanciesList/VacanciesList';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { ButtonInfoType } from './components/VacancyItem/VacancyItem.types';
import { fetchVacanciesPage } from '@/requests/fetchVacanciesPage';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.VACANCIES]);
  const pageData = await fetchVacanciesPage(locale);
  if (!pageData) return null;
  const buttons: ButtonInfoType[] = t('buttons', { returnObjects: true });

  const {
    vacanciesPage: { page_title, description, link_to_apply_label, link_to_read_more_label },
    vacancies,
  } = pageData;

  return (
    <Section fixedWith={true} className="!pt-0 pb-10">
      <div className="vacancies-section mb-15 min-h-[428px] w-full bg-yellow-400 pb-15 pt-[30px] md:mb-25 md:min-h-[368px] md:py-15 md:pt-15 xl:pt-[84px]">
        <Container>
          <Typography as="h1" className="mb-10 text-left text-black">
            {page_title}
          </Typography>

          <Typography
            as="p"
            className="mb-10 max-w-[320px] text-left text-black md:max-w-[500px] xl:max-w-[696px]"
          >
            {description}
          </Typography>
        </Container>
      </div>

      <Container>
        <VacanciesList
          vacancies={vacancies}
          buttonsData={buttons}
          applyLabel={link_to_apply_label}
          readMoreLabel={link_to_read_more_label}
        />
      </Container>
    </Section>
  );
}
