import { FC, Fragment } from 'react';
import Link from 'next/link';

import { ButtonInfoType } from '../VacancyItem/VacancyItem.types';

type Props = {
  buttonsData: ButtonInfoType[];
  slug?: string;
  returnOnlyApplyBtn?: boolean;
};

export const VacancyButtons: FC<Props> = ({ buttonsData, slug, returnOnlyApplyBtn }) => {
  if (returnOnlyApplyBtn) {
    const applyButtonData: ButtonInfoType | undefined = buttonsData.find(
      ({ id }) => id === 'externalLink',
    );

    if (applyButtonData)
      return (
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-primary base-transition inline-flex h-15 min-w-[220px] items-center justify-center text-ui_semibold_18"
        >
          {applyButtonData.buttonTitle}
        </a>
      );
  }

  return (
    <div className="flex gap-8 max-md:flex-col">
      {buttonsData.map(({ id, buttonTitle }) => {
        return (
          <Fragment key={id}>
            {id === 'linkToSinglePage' && (
              <Link
                href={`/vacancies/${slug}`}
                className="btn-outline base-transition inline-flex h-15 items-center justify-center text-ui_semibold_18 md:min-w-[220px]"
              >
                {buttonTitle}
              </Link>
            )}

            {id === 'externalLink' && (
              <a
                href="https://www.google.com/"
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
