import type { Messages } from 'next-intl';

// Define the type for the messages
export type MessageSchema = {
  navigation: {
    webServices: string;
    services: string;
    aboutUs: string;
    howWeWork: string;
    contact: string;
  };
  serviceItems: {
    socialMedia: string;
    ppcAdvertising: string;
    seoContent: string;
    webLanding: string;
    analytics: string;
    contentProduction: string;
    adCampaigns: string;
  };
  languages: {
    slovak: string;
    german: string;
    czech: string;
    english: string;
  };
  home: Record<string, string>;
};

export type LocaleCode = 'sk' | 'en' | 'de' | 'cs';

export type TranslatedMessages = Messages; 