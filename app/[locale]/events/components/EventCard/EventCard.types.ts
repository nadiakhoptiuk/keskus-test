export type EventCardTagType = 'irregular' | 'regular';

export interface EventCardType {
  type: EventCardTagType;
  heading: string;
  details: string;
  href: string;
  schedule?: string;
}
