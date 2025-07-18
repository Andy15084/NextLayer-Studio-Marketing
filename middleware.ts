import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['sk', 'en', 'de', 'cs'],

  // Used when no locale matches
  defaultLocale: 'sk',
  
  // Always add locale prefix to ensure consistent routing
  localePrefix: 'always'
});

export const config = {
  // Match all paths except for
  // - API routes (/api/*)
  // - Static files (/_next/*)
  // - Files with extensions (.jpg, .png, etc.)
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 