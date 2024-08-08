import { FC } from 'react';

import { Typography } from '@/app/(shared)/components/ui/Typography';

import { ButtonInfoType } from './VacancyItem.types';
import { VacancyButtons } from '../VacancyButtons';
import { VacancyShortTypeWithId } from '@/app/(shared)/types/common.types';

type Props = {
  vacancy: VacancyShortTypeWithId;
  buttonsData: ButtonInfoType[];
  applyLabel: string;
  readMoreLabel: string;
};

export const VacancyItem: FC<Props> = async ({
  vacancy,
  buttonsData,
  applyLabel,
  readMoreLabel,
}) => {
  const {
    attributes: { title, short_description, slug, link_to_apply },
  } = vacancy;

  return (
    <li className=" decor-border-bottom relative after:bottom-[-40px] after:w-full last:after:hidden">
      <Typography
        as="h2"
        className=" mb-10 text-left text-black max-md:mb-10 md:text-ui_bold_32 xl:text-ui_bold_40"
      >
        {title}
      </Typography>

      <Typography as="p" className="mb-10 max-xl:text-ui_reg_16 xl:max-w-[90%] xl:text-ui_reg_18">
        {short_description}
      </Typography>

      <VacancyButtons
        buttonsData={buttonsData}
        slug={slug}
        applyLink={link_to_apply}
        applyLabel={applyLabel}
        readMoreLabel={readMoreLabel}
      />
    </li>
  );
};
