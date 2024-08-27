import { FC } from 'react';

type ResultDataType = {
  title: string;
  details: string;
};

type Props = {
  status: 'success' | 'error';
  resultData: { success: ResultDataType; error: ResultDataType };
};

export const SubmitResult: FC<Props> = ({ status, resultData: { success, error } }) => {
  return (
    <div className="relative min-h-[240px] bg-blue-600 px-6 py-10 text-center text-white shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] before:absolute before:bottom-0 before:left-0 before:!h-[91px] before:!w-[105px] before:content-grain-left-yellow after:absolute after:bottom-0 after:right-0 after:!h-[91px] after:!w-[105px] after:content-grain-right-yellow md:p-10">
      <p className="mb-7 text-ui_bold_32">{status === 'success' ? success.title : error.title}</p>

      <p className="mb-7 text-ui_reg_16 text-white md:text-ui_reg_18">
        {status === 'success' ? success.details : error.details}
      </p>
    </div>
  );
};
