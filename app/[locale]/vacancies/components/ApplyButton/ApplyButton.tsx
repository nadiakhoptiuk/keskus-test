import { FC } from 'react';

type Props = {
  applyLabel: string;
  applyLink: string;
};

export const ApplyButton: FC<Props> = ({ applyLabel, applyLink }) => {
  return (
    <a
      href={applyLink}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="btn-primary base-transition inline-flex h-15 min-w-[220px] items-center justify-center text-ui_semibold_18"
    >
      {applyLabel}
    </a>
  );
};
