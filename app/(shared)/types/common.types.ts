import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { LocaleEnum } from '@/app/(shared)/types/enums';

export type WithChildren = {
  children: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type WithError = {
  error?: string;
};

export type RootLayoutProps = WithChildren & PageProps;

export type PageProps = {
  params: {
    locale: LocaleEnum;
    slug?: string;
  };
};

export type Inputs = Record<string, string>;

export type ButtonProps = ComponentPropsWithoutRef<'button'> & WithChildren & WithClassName;

export type InputProps = ComponentPropsWithoutRef<'input'> & WithClassName & WithError;

export type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & WithClassName & WithError;

export interface NavbarLinkProps {
  title: string;
  href: string;
  variant: 'header' | 'footer';
}

export interface PluginUtils {
  addVariant: (name: string, definition: string | string[]) => void;
}

export type ContactsPageData = {
  contactsPage: {
    data: {
      attributes: {
        page_title: string;
        contacts: ContactItemType[];
        text_description: string;
        contact_us_text_yellow_block: string;
      };
    };
  };
};

export type ImageComponentFromStrapi = {
  alt: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

export type ContactsPageType =
  | {
      page_title: string;
      contacts: ContactItemType[];
      text_description: string;
      contact_us_text_yellow_block: string;
    }
  | undefined;

export type ContactItemType = {
  id: string;
  contact_type: 'phone' | 'address' | 'email';
  contact_title: string;
  content: string;
  link: string;
};

export type FoundersData = {
  founders: {
    data: FounderType[];
  };
};

export type FounderType = {
  id: string;
  attributes: FounderCardType;
};

export type FounderCardType = {
  name: string;
  description: string;
  email: string;
  phone_displaying: string;
  phone_link: string;
  photo: ImageComponentFromStrapi;
};

export interface ActivityAreaCardType {
  icon: 'support' | 'adaptation' | 'values';
  title: string;
  list: string;
}

export type AboutPageType =
  | {
      page_title: string;
      text_description: string;
      subtitle_areas_of_activity: string;
      areas_of_activity: ActivityAreaType[];
      subtitle_partners: string;
      partner_logo: PartnerLogoType[];
    }
  | undefined;

export type AboutPageData = {
  aboutUsPage: {
    data: {
      attributes: AboutPageType;
    };
  };
};

export type ActivityAreaType = {
  id: string;
  area_type: 'support' | 'adaptation' | 'values';
  title: string;
  list: string;
};

export type PartnerLogoType = {
  id: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  alt: string;
};
