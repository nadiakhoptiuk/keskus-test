import { FC } from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Tabs } from '@/app/[locale]/components/Support/components/Tabs';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { TabPanelType } from '@/app/(shared)/types/common.types';

import SupportDecor from '@/public/decor/support-decor.png';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { LocaleEnum } from '@/app/(shared)/types/enums';

type Props = {
  locale: LocaleEnum;
  title: string;
  text: string;
  tabsData: TabPanelType[];
};

export const Support: FC<Props> = async ({ locale, title, text, tabsData }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section className="relative bg-blue-600" fixedWith>
      <Container className="grid gap-15 md:grid-cols-[336px_1fr] md:gap-7 xl:grid-cols-[426px_1fr] xl:gap-[74px] 2xl:grid-cols-[600px_1fr]">
        <div className="space-y-10">
          <Typography className="text-zinc-50 md:mb-5 md:!text-ui_bold_32" as="h2">
            {title}
          </Typography>

          <Markdown className="prose-p:font-regular prose prose-p:mb-10 prose-p:font-fixel prose-p:text-ui_reg_16 prose-p:text-zinc-50 last:prose-p:mb-0">
            {text}
          </Markdown>
        </div>

        <div className="relative z-10 rounded bg-zinc-50 px-5 py-5 md:px-7 2xl:px-10">
          <Tabs tabsData={tabsData} clipboardNotificate={t('clipboardSuccess')} />
        </div>
      </Container>

      <Image src={SupportDecor} alt="hero image" className="absolute bottom-0 left-0 z-0" />
    </Section>
  );
};
