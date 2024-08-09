import Markdown from 'react-markdown';

import { fetchPrivacyPolicyPage } from '@/requests/fetchPrivacyPolicyPage';

import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { PageProps } from '@/app/(shared)/types/common.types';

export default async function Page({ params: { locale } }: PageProps) {
  const pageData = await fetchPrivacyPolicyPage(locale);
  if (!pageData) return null;

  const { page_title, content } = pageData;

  return (
    <Section className="max-md:!py-10 md:!py-15 xl:!py-20">
      <Container>
        <Typography as="h1" className="mb-10 max-md:!text-ui_bold_32 md:mb-15 md:!text-ui_bold_60">
          {page_title}
        </Typography>

        <Markdown
          components={{
            h1: 'h2',
            a(props) {
              const { href, children, ...rest } = props;
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  {...rest}
                  className="base-transition font-bold hocus:text-blue-600"
                >
                  {children}
                </a>
              );
            },
          }}
          className="prose mx-auto max-w-[1008px] prose-h2:mt-0 prose-h2:!text-ui_bold_20 prose-p:mt-0 prose-p:whitespace-pre-wrap last:prose-p:mb-0 prose-img:my-0 max-md:prose-h2:mb-6 max-md:prose-p:mb-6 max-md:prose-p:text-ui_reg_16 md:prose-h2:mb-8  md:prose-p:mb-8 md:prose-p:text-ui_reg_18 xl:w-[1008px]"
        >
          {content}
        </Markdown>
      </Container>
    </Section>
  );
}
