'use client';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseModal } from '../BaseModal';
import { Form } from '../Form/Form';
import { Typography } from '../Typography';
import { SubmitResult } from '../SubmitResult';

import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { SubmitStatusType } from '@/app/(shared)/types/common.types';
import { classnames } from '@/app/(shared)/utils/classnames';

type Props = {
  isOpen: boolean;
  close: () => void;
};

export const FormModal: FC<Props> = ({ isOpen, close }) => {
  const { t } = useTranslation(i18nNamespaces.FORM);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>('idle');

  return (
    <BaseModal
      isOpen={isOpen}
      closeModal={close}
      modalClassName="w-[95%] max-w-[448px] rounded overflow-hidden shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]"
      closeButtonClassName={classnames(
        'hocus:!text-yellow-400',
        { '!text-black': submitStatus === 'idle' },
        { '!text-white': submitStatus !== 'idle' },
      )}
    >
      {submitStatus === 'idle' && (
        <div className="bg-white px-6 py-10 md:p-10">
          <Typography as="h2" className="mb-10 text-center !text-ui_bold_24 md:!text-ui_bold_32">
            {t('formTitle')}
          </Typography>

          <Form closeModal={close} setSubmitStatus={setSubmitStatus} />
        </div>
      )}

      {submitStatus !== 'idle' && (
        <SubmitResult status={submitStatus} resultData={t('result', { returnObjects: true })} />
      )}
    </BaseModal>
  );
};
