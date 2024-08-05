import Image from 'next/image';
import Markdown from 'react-markdown';

import { SinglePageWrapper } from '@/app/(shared)/components/ui/SinglePageWrapper';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { fetchAllEventsSlugs } from '@/requests/fetchAllEventsSlugs';
import { fetchSingleEventPageData } from '@/requests/fetchSingleEventsPageData';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { format } from 'date-fns';

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: LocaleEnum };
}): Promise<Array<{ locale: LocaleEnum }>> {
  const eventsSlugsData = await fetchAllEventsSlugs(locale);

  return (
    eventsSlugsData.map(event => {
      return {
        locale: locale,
        slug: event.slug,
      };
    }) || []
  );
}

export default async function Page({ params: { locale, slug } }: PageProps) {
  if (!slug) return null;

  const pageData = await fetchSingleEventPageData(locale, slug);
  if (!pageData) return null;

  const { t } = await initTranslations(locale, [i18nNamespaces.EVENTS]);

  const {
    labels,
    event: {
      attributes: {
        title,
        description,
        image: {
          alt,
          image: {
            data: {
              attributes: { url },
            },
          },
        },
        activity_type,
        type,
        registration_url,
      },
    },
  } = pageData;

  const label = labels.find(filterButton => filterButton.type_of_activity === type)?.label_at_image;

  return (
    <SinglePageWrapper goBackLink={`${RoutesEnum.EVENTS}`} linkText={t('go_back_link')}>
      <Typography
        as="h1"
        className="w-[83%] max-md:mb-10 max-md:!text-ui_bold_20 md:mb-15 md:w-[58%] md:!text-ui_bold_32 xl:w-[904px] xl:!text-ui_bold_40"
      >
        {title}
      </Typography>

      <div className="md:flex md:gap-x-8">
        <div className="relative aspect-[320/360] h-auto w-full overflow-hidden rounded-sm max-md:mb-8 md:w-1/2 xl:h-[600px] xl:w-[488px]">
          {label && (
            <Typography
              as="span"
              className="absolute left-0 top-0 h-8 rounded-sm bg-blue-600 px-3 py-1 text-white"
            >
              {label}
            </Typography>
          )}

          <Image
            src={url}
            alt={alt}
            width={500}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <Markdown
            components={{
              h1: 'p',
              h2: 'p',
              h3: 'p',
              h4: 'p',
              h5: 'p',
              h6: 'p',

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
            className="mb-[18px]"
          >
            {description}
          </Markdown>

          <Typography as="span" className="!text-ui_med_16 text-blue-600">
            {activity_type[0].__typename === 'ComponentActivitiesRegularActivity'
              ? activity_type[0].schedule
              : format(new Date(activity_type[0].date), 'dd.MM.y')}
          </Typography>

          {registration_url && (
            <a
              href={registration_url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-primary base-transition mt-10 flex h-15 w-full items-center justify-center !text-ui_semibold_18 text-white md:mt-11 xl:mt-15 xl:w-max xl:min-w-[220px]"
            >
              {t('registration_btn')}
            </a>
          )}
        </div>
      </div>
    </SinglePageWrapper>
  );
}
