import { FC } from 'react';

import { LocaleProps, i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

export const SendSuggestions: FC<LocaleProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.CONTACTS]);

  return (
    <div className="decor-grain-left decor-grain-right relative flex flex-col items-center bg-yellow-400 pb-[124px] pt-10 md:py-20 2xl:py-25">
      <p className="mb-8 whitespace-pre-line text-center text-ui_reg_16 max-md:w-[252px] md:w-[575px] md:text-ui_reg_18">
        {t('contactUs.contactUsDescription')}
      </p>

      <a
        href={`mailto:${t('contactUs.contactUsEmail')}`}
        className="text-ui_bold_20 md:text-ui_bold_28 "
      >
        {t('contactUs.contactUsEmail')}
      </a>
    </div>
  );
};
