import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { RoutesEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.NOT_FOUND]);

  return (
    <Section
      variant="custom"
      className="relative flex h-full flex-col items-center justify-center bg-blue-600 pb-[192px] pt-15 md:pt-20 xl:pb-[152px] xl:pt-30"
    >
      <Typography className="font-kyiv-type-sans text-[140px] font-bold leading-none text-zinc-50 md:text-[240px] xl:text-[240px]">
        404
      </Typography>

      <Typography className="mb-10 font-kyiv-type-sans text-zinc-50" as="h3">
        {t('title')}
      </Typography>

      <Link
        className="baseTransition text-wrap rounded bg-yellow-400 px-15 py-4 font-semibold text-blue-600 transition-colors duration-300 ease-in-out hover:bg-zinc-50 focus:bg-zinc-50"
        href={`${RoutesEnum.HOME}`}
      >
        {t('backToHome')}
      </Link>

      <Image
        src="/decor/grain-left-decor.svg"
        width={400}
        height={400}
        alt="hero image"
        className="absolute bottom-0 left-0 z-0 w-[50%] md:w-[45%] xl:w-[40%] 2xl:w-[25%]"
      />
      <Image
        src="/decor/grain-right-decor.svg"
        width={400}
        height={400}
        alt="hero image"
        className="absolute bottom-0 right-0 z-0 w-[50%] md:w-[45%] xl:w-[40%] 2xl:w-[25%]"
      />
    </Section>
  );
}
