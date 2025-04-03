import type React from 'react';
import type { Locale } from '@/lib/i18n/get-dictionary';
import { locales } from '@/middleware';
import { ThemeProvider } from '@/components/theme-provider';
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = await params;

  // Validate that the incoming `lang` parameter is valid
  const isValidLocale = locales.some((locale) => locale === lang);
  const locale = isValidLocale ? lang : 'en';

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
