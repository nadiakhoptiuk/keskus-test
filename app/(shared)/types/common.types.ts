import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { ChapterNameVariableEnum, LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { FieldError } from 'react-hook-form';

export type WithChildren = {
  children: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type WithError = {
  error?: FieldError;
};

export type WithId = {
  id: string;
};

export type RootLayoutProps = WithChildren & PageProps;

export type PageProps = {
  params: {
    locale: LocaleEnum;
    slug?: string;
  };
};

export type SinglePageProps = {
  params: {
    locale: LocaleEnum;
    slug: string;
  };
};

export type SlugArgumentType = {
  slug: string;
};

export type ChapterNameArgumentType = {
  chapterName: ChapterNameVariableEnum;
};

export type Inputs = Record<string, string>;

export type SubmitStatusType = 'idle' | 'success' | 'error';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & WithChildren & WithClassName;

export type InputBaseProps = {
  placeholder?: string;
  value?: string;
};

export type InputBasePropsWithType = {
  type: 'text' | 'tel' | 'email';
};

export type InputProps = InputBaseProps &
  InputBasePropsWithType &
  ComponentPropsWithoutRef<'input'> &
  WithClassName &
  WithError;

export type CheckboxProps = InputBaseProps &
  ComponentPropsWithoutRef<'input'> &
  WithClassName &
  WithError;

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

export type FooterDataType = {
  socialNetwork: {
    data: {
      attributes: {
        socials: SocialItemType[];
      };
    };
  };
  policyPage: {
    data: {
      attributes: {
        page_title: string;
      };
    };
  };
  contactsPage: {
    data: {
      attributes: {
        contacts: ContactItemType[];
      };
    };
  };
};

export type FooterDataFetchType = {
  socials: SocialItemType[];
  policyTitle: string;
  contacts: ContactItemType[];
};

export type SocialNetworkType = 'facebook' | 'telegram' | 'viber';

export type SocialItemType = {
  link: string;
  social_network: SocialNetworkType;
};

export type SocialAriaLabelsType = Record<SocialNetworkType, string>;

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

export type ActivityType = 'regular' | 'irregular';

export interface ActivityCommonType {
  id: string;
  attributes: {
    title: string;
    description: string;
    image: ImageComponentFromStrapi;
    type: ActivityType;
    activity_type: RegularActivityTypeWithId[] | IrregularActivityTypeWithId[];
    slug: string;
    registration_url: string;
  };
}

export interface ActivityIrregularType {
  id: string;
  attributes: {
    title: string;
    description: string;
    image: ImageComponentFromStrapi;
    type: 'irregular';
    activity_type: IrregularActivityTypeWithId[];
    slug: string;
    registration_url: string;
  };
}

export type RegularActivityTypeWithId = RegularActivityType & WithId;
export type IrregularActivityTypeWithId = IrregularActivityType & WithId;

export interface RegularActivityType {
  schedule: string;
  __typename: 'ComponentActivitiesRegularActivity';
}

export interface IrregularActivityType {
  date: Date;
  __typename: 'ComponentActivitiesIrregularActivities';
}

type ValuePiece = Date | null;

export type Value = ValuePiece;

export type HomePageFetchData =
  | {
      homepage: HomePageType;
      partners: PartnerLogoType[];
      tabPanels: TabPanelType[];
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
  announcement_button_all_events: string;
};

export type HomePageData = {
  homePage: {
    data: {
      attributes: HomePageType;
    };
  };
  aboutUsPage: {
    data: {
      attributes: { partner_logo: PartnerLogoType[] };
    };
  };
  tabPanels: { data: TabPanelType[] };
  activities: {
    data: ActivityIrregularType[];
  };
};

export type TabPanelType = {
  id: string;
  attributes: {
    payment_system: string;
    tab_clipboard: TabClipboardType[];
  };
};

export type TabClipboardType = {
  id: string;
  title: string;
  content: string;
};

export type EventSinglePageDataType = {
  labels: EventLabelType[];
  event: ActivityCommonType;
};

export type EventSinglePageData = {
  eventsPage: {
    data: {
      attributes: {
        labels: EventLabelType[];
      };
    };
  };
  activities: {
    data: ActivityCommonType[];
  };
};

export type NewsSectionFetchData = {
  newsPage: {
    data: {
      attributes: {
        page_title: string;
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

export type AllSlugsCommonType = {
  slug: string;
}[];

export type AllNewsSlugsData = {
  news: {
    data: slugType[];
  };
};

export type AllEventsSlugsData = {
  activities: {
    data: slugType[];
  };
};

export type AllVacanciesSlugsData = {
  vacancies: {
    data: slugType[];
  };
};

export type AllGalleryEventsSlugsData = {
  galleryEvents: {
    data: slugType[];
  };
};

type slugType = {
  attributes: {
    slug: string;
  };
};

export type MainGalleryImage = {
  main_image: ImageComponentFromStrapi;
};

export type SingleGalleryEventType = {
  title: string;
  gallery: GalleryItemType[];
};

export type SingleGalleryEventItemTypeWithId = SingleGalleryEventItemType & WithId;

export type SingleGalleryEventItemType = {
  attributes: {
    title: string;
    slug: string;
    main_image: ImageComponentFromStrapi;
    gallery: GalleryItemType[];
  };
};

export type GalleryItemType = {
  id: string;
  alt: string;
  image: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  blurDataUrl?: string;
};

export type BlurDataUrlType = {
  blurDataUrl: string;
};

export type GalleryItemWithBlurType = GalleryItemType & BlurDataUrlType;

export type GalleryPageData = {
  galleryPage: {
    data: {
      attributes: {
        page_title: string;
      };
    };
  };
  galleryEvents: {
    data: SingleGalleryEventItemTypeWithId[];
  };
};

export type GalleryEventsFetchData = {
  galleryEvents: {
    data: SingleGalleryEventItemTypeWithId[];
  };
};

export type GalleryPageFetchData = {
  page_title: string;
  gallery: SingleGalleryEventItemTypeWithId[];
};

export type VacanciesPageFetchData = {
  vacanciesPage: VacanciesPageType;
  vacancies: VacancyShortTypeWithId[];
};

export type VacanciesPageData = {
  vacanciesPage: {
    data: {
      attributes: VacanciesPageType;
    };
  };
  vacancies: {
    data: VacancyShortTypeWithId[];
  };
};

export type VacanciesPageType = {
  page_title: string;
  description: string;
  link_to_apply_label: string;
  link_to_read_more_label: string;
};

export type VacancyShortTypeWithId = VacancyShortType & WithId;

export type VacancyShortType = {
  attributes: VacancySingleShortType;
};

export type VacancySingleShortType = {
  title: string;
  slug: string;
  short_description: string;
  link_to_apply: string;
};

export type VacancySingleFullType = {
  attributes: VacancySingleFullDataType;
};

export type VacancySingleFullDataType = {
  title: string;
  slug: string;
  short_description: string;
  long_description: string;
  link_to_apply: string;
};

export type SinglePageVacancyData = {
  vacanciesPage: {
    data: {
      attributes: {
        link_to_apply_label: string;
      };
    };
  };
  vacancies: {
    data: VacancySingleFullType[];
  };
};

export type SinglePageVacancyDataType = {
  applyLabel: string;
  vacancy: VacancySingleFullDataType;
};

export type PrivacyPolicyDataType = {
  policyPage: {
    data: {
      attributes: {
        page_title: string;
        content: string;
      };
    };
  };
};

export type PrivacyPolicyPageData = {
  page_title: string;
  content: string;
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
  };
  news: SingleNewDataType[];
};

export type NewsGeneralDataType = {
  page_title: string;
  subtitile_another_news: string;
};

export type ServicesPageData = {
  servicesPage: {
    data: {
      attributes: ServicesPageDataType;
    };
  };
};

export type ServicesPageDataType = {
  page_title: string;
  services_cards: ServiceCardTypeWithId[];
};

export type ServiceCardType = {
  title: string;
  icon: ImageComponentFromStrapi;
  description: string;
};

export type ServiceCardTypeWithId = ServiceCardType & WithId;

export type EventsPageData = {
  eventsPage: {
    data: {
      attributes: EventsPageGeneralData;
    };
  };
  activities: {
    data: ActivityCommonType[];
  };
};

export type EventsPageDataType = {
  generalInfo: EventsPageGeneralData;
  activities: ActivityCommonType[];
};

export type EventsPageGeneralData = {
  page_title: string;
  labels: EventLabelType[];
};

export type EventLabelType = {
  id: string;
  type_of_activity: ActivityType;
  label_at_image: string;
  filter_button_label: string;
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

export type InputDataType = {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
};

export type MetaImageType = {
  url: string;
  width: string;
  height: string;
};

export type TransformMetaOGPType = {
  baseUrl: string;
  locale: LocaleEnum;
  route: RoutesEnum | string;
};

export type PageMetaDataType = {
  data: {
    attributes: {
      seo: {
        metaTitle: string;
        metaDescription: string;
        metaImage: {
          data: {
            attributes: MetaImageType;
          };
        };
        keywords: string;
      };
    };
  };
};

export type RequestGalleryDataType = {
  commonData: PageMetaDataType;
  singlePageData: SinglePageGalleryMetaDataType;
};

export type RequestCommonDataType = {
  commonData: PageMetaDataType;
  singlePageData: SinglePageCommonMetaDataType;
};

export type SinglePageGalleryMetaDataType = {
  data: {
    attributes: {
      title: string;
      main_image: MetaImageFromCollectionType;
    };
  }[];
};

export type SinglePageCommonMetaDataType = {
  data: {
    attributes: {
      title: string;
      image: MetaImageFromCollectionType;
    };
  }[];
};

export type MetaImageFromCollectionType = {
  image: {
    data: {
      attributes: MetaImageType;
    };
  };
};

export type FinalPageMetaDataType = {
  metaTitle: string;
  metaDescription: string;
  metaImage: MetaImageType;
  keywords: string;
};

export type PlaceholderSourceType = {
  src: string;
  height: number;
  width: number;
};
