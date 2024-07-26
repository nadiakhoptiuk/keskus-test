import { FC } from 'react';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { PartnersList } from '@/app/(shared)/components/ui/PartnersList';

import { PartnerLogoType } from '@/app/(shared)/types/common.types';

type Props = {
  title: string;
  list: PartnerLogoType[];
};

export const Partners: FC<Props> = async ({ title, list }) => {
  return (
    <Section>
      <Container>
        <Typography
          as="h2"
          className="mb-10 !leading-[1.2] max-xl:!text-ui_bold_32 xl:!text-ui_bold_40"
        >
          {title}
        </Typography>

        <PartnersList partners={list} />
      </Container>
    </Section>
  );
};
