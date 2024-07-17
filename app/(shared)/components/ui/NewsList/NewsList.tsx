import { FC } from 'react';

import { NewsCard } from '@/app/(shared)/components/ui/NewsCard';
import { classnames } from '@/app/(shared)/utils/classnames';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { WithClassName } from '@/app/(shared)/types/common.types';
import { NewsCardType } from '../NewsCard/NewsCard.types';

type Props = WithClassName & {
  locale: LocaleEnum;
  data: NewsCardType[];
  className?: string;
};

export const NewsList: FC<Props> = ({ locale, data, className }) => {
  return (
    <ul className={classnames('base-grid', className)}>
      {data.map((element, index) => (
        <NewsCard locale={locale} key={index} card={element} />
      ))}
    </ul>
  );
};
