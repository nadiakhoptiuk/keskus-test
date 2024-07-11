import Markdown from 'react-markdown';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { VacancyButtons } from '../components/VacancyButtons';
import { ButtonInfoType, VacancyItemType } from '../components/VacancyItem/VacancyItem.types';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export async function generateStaticParams({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.VACANCIES]);
  const vacancies: VacancyItemType[] = t('vacancies', { returnObjects: true });

  return vacancies.map(vacancy => {
    return { locale: locale, slug: vacancy.slug };
  });
}

export default async function Page({ params: { locale, slug } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.VACANCIES]);
  const vacancyData: VacancyItemType | undefined = (
    t('vacancies', { returnObjects: true }) as VacancyItemType[]
  ).find(vacancy => vacancy.slug === slug);
  const buttons: ButtonInfoType[] = t('buttons', { returnObjects: true });

  return (
    <>
      {vacancyData && (
        <Section fixedWith={true} className="!pt-0">
          <div className="vacancies-section mb-15 min-h-[520px] w-full bg-yellow-400 pb-[60px] pt-[30px] md:min-h-[464px] md:pt-[60px] xl:mb-25 xl:pt-[84px]">
            <Container>
              <Typography as="h1" className="mb-10 text-left text-black">
                {vacancyData.positionTitle}
              </Typography>

              <Typography
                as="p"
                className="mb-10 max-w-[320px] text-left text-black md:max-w-[507px] xl:max-w-[696px]"
              >
                {vacancyData.shortDescription}
              </Typography>

              <VacancyButtons returnOnlyApplyBtn={true} buttonsData={buttons} />
            </Container>
          </div>

          <Container>
            <Markdown className="prose-h2:mb-10 prose-h2:font-kyiv-type-sans prose-h2:text-ui_bold_32 prose-p:mb-10 prose-p:text-ui_reg_16 last:prose-p:mb-0 xl:max-w-[91.5%] xl:prose-h2:text-ui_bold_40">
              {vacancyData.fullDescription}
            </Markdown>
          </Container>
        </Section>
      )}
    </>
  );
}
