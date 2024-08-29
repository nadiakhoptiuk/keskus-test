import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button';
import { FormModal } from '../FormModal';

import { WithClassName } from '@/app/(shared)/types/common.types';
import { classnames } from '@/app/(shared)/utils/classnames';

export const ContactUsButton: FC<WithClassName> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Button
        className={classnames(
          'base-transition h-10 min-w-[133px] py-2 text-ui_semibold_14 ',
          className,
        )}
        variant="primary"
        onClick={() => setIsModalOpen(true)}
      >
        {t('headerButton')}
      </Button>

      {isModalOpen && <FormModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} />}
    </>
  );
};
