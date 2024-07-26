export interface VacancyItemType {
  positionTitle: string;
  shortDescription: string;
  fullDescription: string;
  slug: string;
}

export interface ButtonInfoType {
  id: 'linkToSinglePage' | 'externalLink';
  buttonTitle: string;
}
