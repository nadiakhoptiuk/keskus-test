import { ActivityIrregularType, ActivityCommonType } from '../types/common.types';

export const availableIrregularEventsDates = (allEvents: ActivityIrregularType[]) => {
  return allEvents.map(({ attributes: { activity_type } }) => {
    return new Date(activity_type[0].date);
  });
};

export const availableEventsDates = (allEvents: ActivityCommonType[]): Date[] => {
  const irregularEvents: ActivityIrregularType[] = allEvents.filter(
    ({ attributes: { activity_type } }) =>
      activity_type[0].__typename === 'ComponentActivitiesIrregularActivities',
  ) as ActivityIrregularType[];

  return irregularEvents.map(({ attributes: { activity_type } }) => {
    return new Date(activity_type[0].date);
  });
};

export const typeToCapitalize = (type: string) => {
  if (!type) return type;
  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};
