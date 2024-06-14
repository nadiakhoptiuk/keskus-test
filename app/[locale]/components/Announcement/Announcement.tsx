import { FC } from 'react';

import { AnnouncementCard } from '@/app/[locale]/components/Announcement/components/AnnouncementCard/AnnouncementCard';
import { Calendar } from '@/app/[locale]/components/Announcement/components/Calendar';
import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces, LocaleProps } from '@/app/(shared)/types/i18n.types';

export const Announcement: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section>
      <Container className="decorBorderBottom grid-cols-announcementSm grid-rows-announcementSm grid-areas-announcementSm md:grid-cols-announcementMd  md:grid-rows-announcementMd md:grid-areas-announcementMd xl:grid-cols-announcementXl xl:grid-rows-announcementXl xl:grid-areas-announcementXl relative grid xl:gap-x-[78px] ">
        <div className="grid-in-title md:mr-8 xl:mr-0">
          <Typography as="h2" className="mb-10 md:mb-[60px]">
            {t('announcementTitle')}
          </Typography>
          <span className="block w-full border-b border-black/20 xl:max-w-[920px]" />
        </div>

        <Calendar className="grid-in-calendar shrink-0 md:ml-auto" locale={locale} />

        <ul className="grid-in-announcements grid w-full gap-y-10 md:mt-[60px] ">
          <AnnouncementCard />
          <AnnouncementCard />

          <AnnouncementCard />
          <AnnouncementCard />
        </ul>
      </Container>
    </Section>
  );
};
