import { FC } from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';

import { LocaleProps, i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

export const GeneralInfo: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.CONTACTS]);

  return (
    <div className="decor-border-top relative grid py-15 before:top-0 before:w-full md:grid-cols-2 md:gap-8 md:py-25 xl:grid-cols-[572px_591px] xl:gap-[52px] 2xl:grid-cols-[600px_auto] 2xl:gap-15">
      <Markdown className="my-auto prose-p:mb-10 prose-p:text-ui_reg_16 last:prose-p:mb-0 max-md:mb-8">
        {t('description')}
      </Markdown>

      <div className="my-auto aspect-[320/260] h-auto w-full items-center md:h-[440px] xl:h-[291px] 2xl:h-[384px]">
        <Image
          src={t('imageSrc')}
          alt={t('imageAlt')}
          width={591}
          height={332}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};
