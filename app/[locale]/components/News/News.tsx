import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { Section } from '@/app/(shared)/components/ui/Section';

import { LocaleProps } from '@/app/(shared)/types/i18n.types';

export const News: FC<LocaleProps> = ({ locale }) => {
  return (
    <Section>
      <Container>News</Container>
    </Section>
  );
};
