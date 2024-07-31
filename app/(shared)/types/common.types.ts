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

export interface ActivitiesData {
  activities: {
    data: ActivityCommonType[];
  };
}

export interface ActivityCommonType {
  id: string;
  attributes: {
    title: string;
    description: string;
    image: ImageComponentFromStrapi;
    type: 'regular' | 'irregular';
    activity_type: RegularActivityType[] | IrregularActivityType[];
  };
}

export interface ActivityIrregularType {
  id: string;
  attributes: {
    title: string;
    description: string;
    image: ImageComponentFromStrapi;
    type: 'irregular';
    activity_type: IrregularActivityType[];
  };
}

interface ActivityInstanceType {
  id: string;
  typename: string;
}

export interface RegularActivityType extends ActivityInstanceType {
  schedule: string;
}

export interface IrregularActivityType extends ActivityInstanceType {
  date: Date;
}

type ValuePiece = Date | null;

export type Value = ValuePiece;

export type HomePageFetchData =
  | {
      homepage: HomePageType;
      irregularActivities: ActivityIrregularType[];
    }
  | undefined;

export type HomePageType = {
  page_title: string;
  hero_text: string;
  hero_button: string;
  financial_support_subtitle: string;
  financial_support_text: string;
  announcement_subtitle: string;
  announcement_button_today: string;
  announcement_button_all_events: string;
};

export type HomePageData = {
  homePage: {
    data: {
      attributes: HomePageType;
    };
  };
  activities: {
    data: ActivityIrregularType[];
  };
};

export type NewsSectionFetchData = {
  newsPage: {
    data: {
      attributes: {
        page_title: string;
        read_more_button: string;
      };
    };
  };
  news: {
    data: SingleNewDataType[];
  };
};

export type NewsSectionDataType =
  | {
      generalInfo: {
        page_title: string;
        read_more_button: string;
      };
      lastThreeNews: SingleNewDataType[];
    }
  | undefined;

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

export type AllNewsSlugsType = {
  slug: string;
}[];

export type AllNewsSlugsData = {
  news: {
    data: slugType[];
  };
};

type slugType = {
  attributes: {
    slug: string;
  };
};

export type SingleNewsPageData = {
  newsPage: {
    data: {
      attributes: NewsGeneralDataType;
    };
  };
  currentNewsData: {
    data: SingleNewDataType[];
  };
  lastThreeNews: {
    data: SingleNewDataType[];
  };
};

export type NewsPageData = {
  newsPage: {
    data: {
      attributes: NewsGeneralDataType;
    };
  };
  news: {
    data: SingleNewDataType[];
  };
};

export type SingleNewDataType = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    date: Date;
    image: ImageComponentFromStrapi;
    content: string;
  };
};

export type SingleNewsPageDataType = {
  generalInfo: NewsGeneralDataType;
  currentNewsData: SingleNewDataType;
  lastThreeNews: SingleNewDataType[];
};

export type NewsPageFetchData = {
  newspage: {
    page_title: string;
    read_more_button: string;
  };
  news: SingleNewDataType[];
};

export type NewsGeneralDataType = {
  page_title: string;
  read_more_button: string;
  see_all_news_link: string;
  subtitile_another_news: string;
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
