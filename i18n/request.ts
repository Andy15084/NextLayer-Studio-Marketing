import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Default to 'sk' if locale is undefined
  const validLocale = locale || 'sk';
 
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
}); 