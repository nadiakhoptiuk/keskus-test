import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container/Container';
import { Section } from '@/app/(shared)/components/ui/Section';

import { LocaleProps } from '@/app/(shared)/types/i18n.types';

export const Announcement: FC<LocaleProps> = ({ locale }) => {
  return (
    <Section>
      <Container>{locale}</Container>
    </Section>
  );
};
