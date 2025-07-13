import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Import language messages
import skMessages from './messages/sk';
import enMessages from './messages/en';
import deMessages from './messages/de';
import csMessages from './messages/cs';

const locales = ['sk', 'en', 'de', 'cs'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the locale is supported
  if (!locale || !locales.includes(locale as string)) {
    notFound();
  }

  // Get messages for the requested locale
  const messages = {
    'sk': skMessages,
    'en': enMessages,
    'de': deMessages,
    'cs': csMessages,
  }[locale] || skMessages;

  return {
    locale,
    messages
  };
}); 