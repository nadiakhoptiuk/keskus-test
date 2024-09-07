import { FC } from 'react';

import { ServiceCard } from '../ServiceCard';

import { ServiceCardTypeWithId } from '@/app/(shared)/types/common.types';

type Props = {
  services: ServiceCardTypeWithId[];
};

export const ServicesList: FC<Props> = ({ services }) => {
  return (
    <ul className="grid gap-8 md:gap-y-10 xl:grid-cols-2 2xl:gap-x-10">
      {services.map(({ id, ...rest }) => {
        return <ServiceCard key={id} {...rest} />;
      })}
    </ul>
  );
};
