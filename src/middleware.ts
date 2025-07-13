import createMiddleware from 'next-intl/middleware';

// Define supported locales
const locales = ['sk', 'en', 'de', 'cs'];

// Export the middleware
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // The default locale
  defaultLocale: 'sk',
  
  // Only add locale prefix when it's not the default locale
  localePrefix: 'as-needed'
});

// Configure matcher
export const config = {
  // Match all paths except for
  // - API routes (/api/*)
  // - Static files (/_next/*)
  // - Files with extensions (.jpg, .png, etc.)
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 