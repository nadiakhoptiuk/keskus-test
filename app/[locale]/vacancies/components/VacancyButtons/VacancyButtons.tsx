import { FC, Fragment } from 'react';
import Link from 'next/link';

import { ButtonInfoType } from '../VacancyItem/VacancyItem.types';

type Props = {
  buttonsData: ButtonInfoType[];
  applyLabel: string;
  applyLink: string;
  slug: string;
  readMoreLabel: string;
};

export const VacancyButtons: FC<Props> = ({
  buttonsData,
  slug,
  applyLabel,
  applyLink,
  readMoreLabel,
}) => {
  return (
    <div className="flex gap-8 max-md:flex-col">
      {buttonsData.map(({ id }) => {
        return (
          <Fragment key={id}>
            {id === 'linkToSinglePage' && (
              <Link
                href={`/vacancies/${slug}`}
                className="btn-outline base-transition inline-flex h-15 items-center justify-center text-ui_semibold_18 md:min-w-[220px]"
              >
                {readMoreLabel}
              </Link>
            )}

            {id === 'externalLink' && (
              <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary base-transition inline-flex h-15 items-center justify-center text-ui_semibold_18 md:min-w-[220px]"
              >
                {applyLabel}
              </a>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
