export interface CookiePreferences {
  necessary: boolean;
  analytical: boolean;
  marketing: boolean;
  accepted: boolean;
}

export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') {
    return {
      necessary: true,
      analytical: false,
      marketing: false,
      accepted: false
    };
  }

  const stored = localStorage.getItem('cookiePreferences');
  if (stored) {
    return JSON.parse(stored);
  }

  return {
    necessary: true,
    analytical: false,
    marketing: false,
    accepted: false
  };
};

export const setCookiePreferences = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  localStorage.setItem('cookiesAccepted', preferences.accepted.toString());
};

export const acceptAllCookies = (): void => {
  const preferences: CookiePreferences = {
    necessary: true,
    analytical: true,
    marketing: true,
    accepted: true
  };
  setCookiePreferences(preferences);
};

export const declineAllCookies = (): void => {
  const preferences: CookiePreferences = {
    necessary: true,
    analytical: false,
    marketing: false,
    accepted: false
  };
  setCookiePreferences(preferences);
};

export const hasAcceptedCookies = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookiesAccepted') === 'true';
}; 