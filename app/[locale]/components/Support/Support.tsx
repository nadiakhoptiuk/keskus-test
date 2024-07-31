import { FC } from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Tabs } from '@/app/[locale]/components/Support/components/Tabs';
import { Typography } from '@/app/(shared)/components/ui/Typography';
// import { initTranslations } from '@/app/i18n/extensions/initTranslations';

// import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import SupportDecor from '@/public/decor/support-decor.png';
// import { LocaleEnum } from '@/app/(shared)/types/enums';

type Props = {
  // locale: LocaleEnum;
  title: string;
  text: string;
};

export const Support: FC<Props> = async ({ title, text }) => {
  // const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section className="relative bg-blue-600" fixedWith>
      <Container className="mg:grid-cols-[336px_1fr] grid gap-15 md:gap-7 xl:grid-cols-[426px_1fr] xl:gap-[74px] 2xl:grid-cols-[600px_1fr]">
        <div className="space-y-10">
          <Typography className="text-zinc-50 md:mb-5" as="h2">
            {title}
          </Typography>

          <Markdown className="prose-p:font-regular prose prose-p:mb-10 prose-p:font-fixel prose-p:text-[18px] prose-p:leading-[1.6] prose-p:text-zinc-50 last:prose-p:mb-0">
            {text}
          </Markdown>
        </div>

        <div className="relative z-10 rounded bg-zinc-50 px-7 py-5 2xl:px-10">
          <Tabs />
        </div>
      </Container>

      <Image src={SupportDecor} alt="hero image" className="absolute bottom-0 left-0 z-0" />
    </Section>
  );
};
