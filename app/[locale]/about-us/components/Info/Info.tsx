import { FC } from 'react';
import Markdown from 'react-markdown';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';

type Props = {
  title: string;
  text: string;
};

export const Info: FC<Props> = async ({ title, text }) => {
  return (
    <Section
      fixedWith={true}
      className="infoSection bg-[top_left] bg-no-repeat pb-15 pt-10 md:bg-[bottom_left_-315px] md:pb-[204px] md:pt-15 lg:bg-[bottom_left_-180px] xl:bg-[bottom_left_-80px] xl:pb-[246px] xl:pt-[84px] 2xl:bg-[bottom_left]"
    >
      <Container className="md:grid md:grid-cols-[255px_276px] md:gap-x-[138px] xl:grid-cols-[391px_544px] xl:gap-x-[281px]">
        <Typography as="h1" className="max-md:mb-[248px] md:w-[391px]">
          {title}
        </Typography>

        <div className="xl:w-[512px] xl:pt-[102px]">
          <Markdown className="prose prose-p:mb-8 prose-p:mt-0 prose-p:whitespace-pre-wrap prose-p:text-[16px] last:prose-p:mb-0 md:prose-p:text-[18px]">
            {text}
          </Markdown>
        </div>
      </Container>
    </Section>
  );
};
