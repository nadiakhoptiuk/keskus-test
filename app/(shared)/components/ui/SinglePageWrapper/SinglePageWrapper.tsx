import { FC } from 'react';
import Link from 'next/link';

import { Container } from '@/app/(shared)/components/ui/Container';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Section } from '@/app/(shared)/components/ui/Section';

import { WithChildren } from '@/app/(shared)/types/common.types';

type Props = WithChildren & {
  goBackLink: string;
  linkText: string;
};

export const SinglePageWrapper: FC<Props> = ({ children, goBackLink, linkText }) => {
  return (
    <Section className="pt-[112px]">
      <Container className="relative">
        <Link
          className="base-transition absolute -top-24 right-5 inline-flex items-baseline gap-x-2 hover:text-blue-600 focus:text-blue-600 max-md:!text-ui_med_16 md:top-[-68px] md:!text-ui_med_18 xl:right-0 xl:top-0"
          href={goBackLink}
        >
          <CustomIcon className="rotate-90 text-blue-600" icon="arrow-sm" />
          {linkText}
        </Link>

        {children}
      </Container>
    </Section>
  );
};
