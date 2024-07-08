export interface VacancyItemType {
  positionTitle: string;
  shortDescription: string;
  fullDescription: string;
  type: string;
  location: string;
  slug: string;
}

export interface ButtonInfoType {
  id: 'linkToSinglePage' | 'externalLink';
  buttonTitle: string;
}
