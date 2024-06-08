import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/index.css';
import { headers } from 'next/headers';
import acceptLanguage from 'accept-language';
import i18nConfig from '../i18n/config';
import Providers from './Providers';

acceptLanguage.languages(i18nConfig.supportedLngs);

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = headers().get('accept-language') ?? '';
  const lang = acceptLanguage.get(header) ?? 'en-US';
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Providers lang={lang}>{children}</Providers>
      </body>
    </html>
  );
}
