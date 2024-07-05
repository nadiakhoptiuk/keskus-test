import { FC, Fragment } from 'react';
import Link from 'next/link';

import { ButtonInfoType } from '../VacancyItem/VacancyItem.types';

type Props = {
  buttonsData: ButtonInfoType[];
};

export const VacancyButtons: FC<Props> = ({ buttonsData }) => {
  return (
    <div className="flex gap-8 max-md:flex-col">
      {buttonsData.map(({ id, buttonTitle }) => {
        return (
          <Fragment key={id}>
            {id === 'linkToSinglePage' && (
              <Link
                href="/vacancies"
                className="btn-outline base-transition inline-flex h-15 items-center justify-center text-ui_semibold_18 md:min-w-[220px]"
              >
                {buttonTitle}
              </Link>
            )}

            {id === 'externalLink' && (
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary base-transition inline-flex h-15 items-center justify-center text-ui_semibold_18 md:min-w-[220px]"
              >
                {buttonTitle}
              </a>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
