import { Metadata } from 'next';
import Markdown from 'react-markdown';

import notFound from '@/app/[locale]/[not-found]/page';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { ApplyButton } from '../components/ApplyButton';

import { fetchSingleVacancy } from '@/requests/fetchSingleVacancy';
import { fetchAllVacanciesSlugs } from '@/requests/fetchAllVacanciesSlugs';
import { generateSinglePageMetaData } from '@/app/(shared)/utils/generatePageMetaData';

import { PageProps, SinglePageProps } from '@/app/(shared)/types/common.types';
import {
  ChapterNameVariableEnum,
  LocaleEnum,
  RoutesEnum,
  SinglePageNameVariableEnum,
} from '@/app/(shared)/types/enums';

// eslint-disable-next-line unicorn/prevent-abbreviations
export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export async function generateStaticParams({
  params: { locale },
}: PageProps): Promise<Array<{ locale: LocaleEnum; slug: string }>> {
  const vacanciesSlugsData = await fetchAllVacanciesSlugs(locale);

  return vacanciesSlugsData.map(vacancy => {
    return {
      locale: locale,
      slug: vacancy.slug,
    };
  });
}

export const generateMetadata = async ({
  params: { locale, slug },
}: SinglePageProps): Promise<Metadata> => {
  const args = {
    locale,
    pageName: SinglePageNameVariableEnum.VACANCIES,
    route: `${RoutesEnum.VACANCIES}/${slug}`,
    chapterName: ChapterNameVariableEnum.VACANCIES,
    slug,
  };

  return await generateSinglePageMetaData(args);
};

export default async function Page({ params: { locale, slug } }: PageProps) {
  if (!slug) return null;

  const pageData = await fetchSingleVacancy(locale, slug);
  if (!pageData) return notFound({ params: { locale: locale } });

  const {
    applyLabel,
    vacancy: { title, short_description, long_description, link_to_apply },
  } = pageData;

  return (
    <>
      <Section fixedWith={true} className="!pt-0">
        <div className="vacancies-section mb-15 min-h-[520px] w-full bg-yellow-400 pb-[60px] pt-[30px] md:min-h-[464px] md:pt-[60px] xl:mb-25 xl:pt-[84px]">
          <Container>
            <Typography as="h1" className="mb-10 text-left text-black">
              {title}
            </Typography>

            <Typography
              as="p"
              className="mb-10 max-w-[320px] text-left text-black md:max-w-[507px] xl:max-w-[696px]"
            >
              {short_description}
            </Typography>

            <ApplyButton applyLabel={applyLabel} applyLink={link_to_apply} />
          </Container>
        </div>

        <Container>
          <Markdown
            components={{
              h1: 'h2',
              h2: 'h2',
              h3: 'h2',
              h4: 'h2',
              h5: 'h2',
              h6: 'h2',

              a(props) {
                const { children, ...rest } = props;
                return (
                  <a
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    {...rest}
                    className="base-transition font-bold hocus:text-blue-600"
                  >
                    {children}
                  </a>
                );
              },
            }}
            className="prose-h2:mb-10 prose-h2:font-kyiv-type-sans prose-h2:text-ui_bold_32 prose-p:mb-10 prose-p:whitespace-pre-wrap prose-p:text-ui_reg_16 last:prose-p:mb-0 xl:max-w-[91.5%] xl:prose-h2:text-ui_bold_40"
          >
            {long_description}
          </Markdown>
        </Container>
      </Section>
    </>
  );
}
