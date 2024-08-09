import { FC } from 'react';

import { ContactItemType } from '@/app/(shared)/types/common.types';

type Props = {
  text: string;
  contacts: ContactItemType[];
};

export const SendSuggestions: FC<Props> = async ({ text, contacts }) => {
  const emailData: ContactItemType | undefined = contacts.find(
    ({ contact_type }) => contact_type === 'email',
  );

  return (
    <div className="decor-grain-left decor-grain-right relative flex flex-col items-center bg-yellow-400 pb-[124px] pt-10 md:py-20 2xl:py-25">
      <p className="mb-8 whitespace-pre-line text-center text-ui_reg_16 max-md:w-[252px] md:w-[575px] md:text-ui_reg_18">
        {text}
      </p>

      <a
        href={`mailto:${emailData?.link}`}
        className="base-transition text-ui_bold_20 hocus:text-blue-600 md:text-ui_bold_28"
      >
        {emailData?.link}
      </a>
    </div>
  );
};
