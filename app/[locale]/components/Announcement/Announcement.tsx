import { FC } from 'react';

import { AnnouncementCard } from '@/app/[locale]/components/Announcement/components/AnnouncementCard';
import { Calendar } from '@/app/[locale]/components/Announcement/components/Calendar';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';

export const Announcement: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section>
      <Container className="decor-border-bottom relative grid grid-cols-announcementSm grid-rows-announcementSm grid-areas-announcementSm md:grid-cols-announcementMd md:grid-rows-announcementMd md:gap-y-15 md:grid-areas-announcementMd xl:grid-cols-announcementXl xl:grid-rows-announcementXl xl:gap-x-[78px] xl:gap-y-10 xl:grid-areas-announcementXl">
        <div className="grid-in-title md:mr-8 xl:mr-0">
          <Typography
            as="h2"
            className="mb-10 max-xl:!text-ui_bold_32 md:mb-15 md:max-w-[230px] xl:max-w-[696px] xl:!text-ui_bold_40"
          >
            {t('announcementTitle')}
          </Typography>

          <span className="block w-full border-b border-black/20 xl:max-w-[696px] 2xl:max-w-[920px]" />
        </div>

        <Calendar
          className="max-h-[442px] shrink-0 grid-in-calendar max-md:mx-auto md:ml-auto xl:-mt-10"
          locale={locale}
        />

        <ul className="grid w-full gap-y-10 grid-in-announcements">
          <AnnouncementCard />
          <AnnouncementCard />
        </ul>
      </Container>
    </Section>
  );
};
