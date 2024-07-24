import { FC } from 'react';

import { Typography } from '@/app/(shared)/components/ui/Typography';

import { ButtonInfoType, VacancyItemType } from './VacancyItem.types';
import { VacancyButtons } from '../VacancyButtons';

type Props = {
  vacancy: VacancyItemType;
  buttonsData: ButtonInfoType[];
};

export const VacancyItem: FC<Props> = async ({ vacancy, buttonsData }) => {
  const { positionTitle, shortDescription, slug } = vacancy;

  return (
    <li className=" decor-border-bottom relative after:bottom-[-40px] after:w-full last:after:hidden">
      <Typography
        as="h2"
        className=" mb-10 text-left text-black max-md:mb-10 md:text-ui_bold_32 xl:text-ui_bold_40"
      >
        {positionTitle}
      </Typography>

      <Typography as="p" className="mb-10 max-xl:text-ui_reg_16 xl:max-w-[90%] xl:text-ui_reg_18">
        {shortDescription}
      </Typography>

      <VacancyButtons buttonsData={buttonsData} slug={slug} />
    </li>
  );
};
