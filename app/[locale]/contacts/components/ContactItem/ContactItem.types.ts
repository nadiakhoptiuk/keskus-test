export interface ContactItemType {
  id: 'tel' | 'email' | 'address';
  heading: string;
  content: string;
  href: string;
}
