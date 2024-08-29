'use client';

import { FC, SetStateAction } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { schema } from '@/app/(shared)/utils/validationSchema';
import { sendEmail } from '@/app/(shared)/utils/sendEmail';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Checkbox } from '@/app/(shared)/components/form/Checkbox';
import { Input } from '@/app/(shared)/components/form/Input';
import { Label } from '@/app/(shared)/components/form/Label';
import { TextArea } from '@/app/(shared)/components/form/TextArea';

import type { InputDataType, Inputs, SubmitStatusType } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { CustomIcon } from '../CustomIcon';

type Props = {
  closeModal: () => void;
  setSubmitStatus: React.Dispatch<SetStateAction<SubmitStatusType>>;
};

export const Form: FC<Props> = ({ closeModal, setSubmitStatus }) => {
  const { t } = useTranslation(i18nNamespaces.FORM);
  const inputData: InputDataType[] = t('inputs', { returnObjects: true });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async formData => {
    try {
      await sendEmail(formData);
      reset();
      setSubmitStatus('success');
      setTimeout(closeModal, 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(closeModal, 5000);
    }
  };

  return (
    <form
      className="mx-auto w-full max-w-[364px]"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="grid w-full grid-cols-1 gap-7">
        {inputData?.map(({ type, label, name, ...props }, index) => {
          if (type !== 'textarea') {
            return (
              <Label key={index} labelText={label} className="text-ui_reg_16">
                <Input {...register(name)} error={errors[name]} type={type} {...props} />
              </Label>
            );
          }

          return (
            <Label key={index} labelText={label} className="h-fit text-left">
              <TextArea
                {...register(name)}
                className="resize-none"
                rows={5}
                error={errors[name]}
                {...props}
              />
            </Label>
          );
        })}

        <div className="text-left">
          <Label className="inline-flex cursor-pointer items-start gap-3">
            <Checkbox {...register('terms')} error={errors.terms} labelText={t('checkbox')} />
          </Label>
        </div>
      </div>

      <Button
        className="btn-primary base-transition mt-10 w-full gap-x-6 rounded-md px-5 py-[14px] font-bold text-white"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? (
          <CustomIcon icon="spinner" className="!h-[28px] !w-[28px] !animate-spin" />
        ) : (
          t('submitBtn')
        )}
      </Button>
    </form>
  );
};
