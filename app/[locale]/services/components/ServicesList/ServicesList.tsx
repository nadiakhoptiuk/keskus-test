import { FC } from 'react';

import { ServiceCard } from '../ServiceCard';

import { ServiceCardType } from '../ServiceCard/ServiceCard.types';

type Props = {
  services: ServiceCardType[];
};

export const ServicesList: FC<Props> = ({ services }) => {
  return (
    <ul className="grid gap-x-8 gap-y-8 md:gap-y-10 xl:grid-cols-2 2xl:gap-x-10">
      {services.map(({ ...props }, index) => {
        return <ServiceCard key={index} {...props} />;
      })}
    </ul>
  );
};
