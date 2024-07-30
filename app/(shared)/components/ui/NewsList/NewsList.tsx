import { FC } from 'react';

import { NewsCard } from '@/app/(shared)/components/ui/NewsCard';
import { classnames } from '@/app/(shared)/utils/classnames';

import { SingleNewDataType, WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  data: SingleNewDataType[];
  readMoreText: string;
  className?: string;
};

export const NewsList: FC<Props> = ({ readMoreText, data, className }) => {
  return (
    <ul className={classnames('base-grid', className)}>
      {data.map((element, index) => (
        <NewsCard key={index} card={element} readMoreText={readMoreText} Tag="li" />
      ))}
    </ul>
  );
};
