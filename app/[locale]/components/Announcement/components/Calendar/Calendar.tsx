'use client';

import { FC, useState } from 'react';
import { classnames } from '@/app/(shared)/utils/classnames';
import ReactCalendar from 'react-calendar';
import { useTranslation } from 'react-i18next';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { Spinner } from '@/app/(shared)/components/ui/Spinner/Spinner';

import { getMonthWithYear } from '@/app/(shared)/utils/date';
import { useClient } from '@/app/(shared)/hooks/useClient';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { WithClassName } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = WithClassName & {
  locale: LocaleEnum;
};

export const Calendar: FC<Props> = ({ locale, className }) => {
  const { t } = useTranslation([i18nNamespaces.HOMEPAGE]);
  const { isBrowser } = useClient();
  const [value, onChange] = useState<Value>(new Date());

  if (!isBrowser)
    return (
      <div className="my-10 grid gap-y-5 md:my-0 md:gap-y-6">
        <Typography as="h3" className="first-letter:capitalize">
          {getMonthWithYear(locale)}
        </Typography>

        <Spinner
          className="h-[286px] w-[390px] md:w-[336px] xl:h-[390px] xl:w-[442px]"
          iconClassName="h-10 w-10"
        />
      </div>
    );

  return (
    <div className={classnames('my-10 grid gap-y-5 md:my-0 md:gap-y-6', className)}>
      <div className="h-max md:flex md:items-center md:justify-between">
        <Typography as="h3" className="font-fixel !text-ui_bold_20 first-letter:capitalize">
          {getMonthWithYear(locale)}
        </Typography>

        <Button
          variant="outline"
          className="min-w-[127px] bg-blue-50 text-ui_med_16 max-md:hidden"
          onClick={() => {
            onChange(new Date());
          }}
        >
          {t('announcementButton')}
        </Button>
      </div>

      <ReactCalendar
        value={value}
        onChange={onChange}
        calendarType="iso8601"
        defaultView="month"
        locale={locale}
        showNavigation={false}
        view="month"
      />
    </div>
  );
};
