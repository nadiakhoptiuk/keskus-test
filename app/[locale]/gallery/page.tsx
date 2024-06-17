import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { classnames } from '@/app/(shared)/utils/classnames';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.GALLERY]);

  return (
    <Section>
      <Container>
        <Typography as="h1" className="mb-10 text-center md:mb-15">
          {t('title')}
        </Typography>

        <ul className="columns-1 gap-8 md:columns-2 xl:columns-3">
          {Array.from({ length: 11 }).map((_, index) => (
            <li key={index} className={classnames('mb-8 last:mb-0')}>
              <img
                className={classnames(
                  'aspect-square w-full object-cover',
                  (index >= 3 && index <= 7) || (index % 7 >= 3 && index % 7 <= 7)
                    ? 'aspect-video'
                    : '',
                )}
                src={`https://picsum.photos/seed/${index}/600/300`}
                alt=""
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
