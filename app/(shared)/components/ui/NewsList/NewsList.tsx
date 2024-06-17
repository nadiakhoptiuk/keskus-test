import { FC } from 'react';

import { NewsCard } from '@/app/(shared)/components/ui/NewsCard';
import { classnames } from '@/app/(shared)/utils/classnames';

import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  locale: LocaleEnum;
  data: Array<unknown>;
};

export const NewsList: FC<Props> = ({ locale, data = [], className }) => {
  return (
    <ul className={classnames('base-grid', className)}>
      {data.map((_, index) => (
        <NewsCard locale={locale} key={index} link={`${RoutesEnum.NEWS}/${index + 1}`} />
      ))}
    </ul>
  );
};
