import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Albert_Sans, Roboto_Mono } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiesPopup from "@/components/CookiesPopup";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'NextLayer Studio',
    description: 'NextLayer Studio - Professional Marketing Agency',
  };
}

// Define valid locales
const locales = ['sk', 'en', 'de', 'cs'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the locale is supported
  if (!locales.includes(locale)) {
    notFound();
  }
  
  // Get messages for current locale using next-intl
  const messages = await getMessages({ locale });

  // Debug logs
  console.log('Loaded locale:', locale);
  console.log('Loaded subtitle:', messages.home?.subtitle);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${albertSans.variable} ${robotoMono.variable} antialiased`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#c2fff7]">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <CookiesPopup />
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 