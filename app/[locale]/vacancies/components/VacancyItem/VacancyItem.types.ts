export interface VacancyItemType {
  positionTitle: string;
  description: string;
  type: string;
  location: string;
}

export interface ButtonInfoType {
  id: 'linkToSinglePage' | 'externalLink';
  buttonTitle: string;
}
