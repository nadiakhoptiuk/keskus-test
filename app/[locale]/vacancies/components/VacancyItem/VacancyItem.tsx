import { FC } from 'react';

import { Typography } from '@/app/(shared)/components/ui/Typography';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';

import { ButtonInfoType, VacancyItemType } from './VacancyItem.types';
import { VacancyButtons } from '../VacancyButtons';

type Props = {
  vacancy: VacancyItemType;
  buttonsData: ButtonInfoType[];
};

export const VacancyItem: FC<Props> = async ({ vacancy, buttonsData }) => {
  const { positionTitle, type, location, shortDescription, slug } = vacancy;

  return (
    <li className=" decor-border-bottom relative after:bottom-[-40px] after:w-full last:after:hidden">
      <div className="mb-10 md:flex md:h-[48px] md:items-center md:justify-between">
        <Typography
          as="h2"
          className="text-left text-black max-md:mb-10 md:text-ui_bold_32 xl:text-ui_bold_40"
        >
          {positionTitle}
        </Typography>

        <div className="flex space-x-10">
          <Typography as="p" className="!text-ui_med_16">
            <span className="text-blue-600">Type: </span>

            <span>{type}</span>
          </Typography>

          <div className="flex items-start space-x-2">
            <CustomIcon icon="pin" />
            <span className="!text-ui_med_16">{location}</span>
          </div>
        </div>
      </div>

      <Typography as="p" className="mb-10 max-xl:text-ui_reg_16 xl:max-w-[90%] xl:text-ui_reg_18">
        {shortDescription}
      </Typography>

      <VacancyButtons buttonsData={buttonsData} slug={slug} />
    </li>
  );
};
