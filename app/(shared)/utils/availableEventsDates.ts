import { ActivityIrregularType } from '../types/common.types';

export const availableEventsDates = (allEvents: ActivityIrregularType[]) => {
  return allEvents.map(({ attributes: { activity_type } }) => {
    return new Date(activity_type[0].date);
  });
};
