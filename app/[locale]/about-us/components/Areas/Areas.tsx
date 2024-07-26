import { FC } from 'react';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { ActivityAreaList } from '@/app/[locale]/about-us/components/ActivityAreaList';

import { ActivityAreaType } from '@/app/(shared)/types/common.types';

type Props = { title: string; areas: ActivityAreaType[] };

export const Areas: FC<Props> = async ({ areas, title }) => {
  return (
    <Section className="areas-section !pt-0 pb-[274px] md:mt-[-77px] md:pb-[345px] xl:mt-[-96px] xl:pb-[600px]">
      <Container>
        <Typography
          as="h2"
          className="mb-10 whitespace-break-spaces text-left max-xl:!text-ui_bold_32 md:mb-15 md:ml-auto md:w-[321px] xl:mb-25 xl:w-[544px] xl:!text-ui_bold_40 2xl:w-[766px]"
        >
          {title}
        </Typography>

        <ActivityAreaList cards={areas} />
      </Container>
    </Section>
  );
};
