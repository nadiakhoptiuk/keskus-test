import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Markdown from 'react-markdown';

import { Container } from '@/app/(shared)/components/ui/Container';
import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';

import Banner from '@/public/images/hero@2x.png';

type Props = {
  locale: LocaleEnum;
  pageTitle: string;
  text: string;
  buttonText: string;
};

export const Hero: FC<Props> = async ({ locale, pageTitle, text, buttonText }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section
      className="from-yellow-400 to-zinc-50 md:overflow-x-hidden md:bg-gradient-to-r md:from-[50%] md:to-[50%] lg:from-[56%] lg:to-[56%] xl:from-[52.4%] xl:to-[52.4%] 2xl:from-[51.8%] 2xl:to-[51.8%]"
      variant="custom"
      fixedWith
    >
      <div className="w-full bg-yellow-400 max-md:py-10 md:bg-transparent">
        <Container className="relative grid grid-rows-1 from-yellow-400 to-zinc-50 md:grid-cols-[1fr_1fr] md:grid-rows-1 md:gap-4 md:bg-gradient-to-r md:from-[446px] md:to-[446px] md:pb-25 md:pt-15 xl:gap-[62px] xl:from-[654px] xl:to-[654px] xl:pb-[94px] xl:pt-[86px]">
          <div className="space-y-10 xl:min-h-[525px] xl:w-[540px] xl:space-y-11 xl:p-0">
            <Typography as="h1">{pageTitle}</Typography>

            <Markdown className="prose-p:font-regular prose prose-p:mb-10 prose-p:whitespace-pre-wrap prose-p:font-fixel prose-p:text-[18px] prose-p:leading-[1.6] last:prose-p:mb-0 xl:prose-p:mb-11">
              {text}
            </Markdown>

            <Link
              href={`${RoutesEnum.ABOUT_US}`}
              className="btn-primary flex h-[60px] w-[220px] items-center justify-center"
            >
              {buttonText}
            </Link>
          </div>

          <div className="mx-auto shrink-0 max-md:hidden max-md:aspect-[360/318] max-md:max-w-[480px] md:absolute md:bottom-0 md:right-[-258px] md:w-[580px] xl:right-[-366px] xl:h-[674px] xl:w-[928px] 2xl:right-[-142px]">
            <Image
              src={Banner}
              priority
              alt={t('heroImageAlt')}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-center max-md:object-contain md:object-cover xl:object-top"
            />
          </div>
        </Container>
      </div>

      <div className="mx-auto shrink-0 max-md:aspect-[360/318] max-md:max-w-[480px] md:hidden">
        <Image
          src={Banner}
          alt={t('heroImageAlt')}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-center max-md:object-contain md:object-cover"
        />
      </div>
    </Section>
  );
};
