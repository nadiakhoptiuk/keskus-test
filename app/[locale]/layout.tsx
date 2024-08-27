import localFont from 'next/font/local';
import 'swiper/css';
import '@/app/globals.css';

import { dir } from 'i18next';

import { Footer } from '@/app/(shared)/components/layout/Footer';
import { Header } from '@/app/(shared)/components/layout/Header';
import { TranslationsProvider } from '@/app/i18n/extensions/TranslationsProvider';
import { classnames } from '@/app/(shared)/utils/classnames';
import { i18nConfig } from '@/app/i18n/config';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { PageProps, RootLayoutProps } from '@/app/(shared)/types/common.types';
import { fetchFooterData } from '@/requests/fetchFooterData';

const kyivSans = localFont({
  src: [
    {
      path: '../../public/fonts/kyiv-type-sans/KyivTypeSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kyiv-type-sans/KyivTypeSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--fonts-kyiv-type-sans',
});

const fixel = localFont({
  src: [
    {
      path: '../../public/fonts/fixel/FixelText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fixel/FixelText-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fixel/FixelText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fixel/FixelText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fixel/FixelText-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--fonts-fixel',
});

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export const generateMetadata = async ({ params: { locale } }: PageProps) => {
  const { t } = await initTranslations(locale, [i18nNamespaces.METADATA]);

  return {
    title: t('title'),
    description: t('description'),
  };
};

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const footerData = await fetchFooterData(locale);

  const { resources } = await initTranslations(locale, [
    i18nNamespaces.HEADER,
    i18nNamespaces.FOOTER,
    i18nNamespaces.FORM,
  ]);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={classnames(
          kyivSans.variable,
          fixel.variable,
          'flex h-full min-h-screen flex-col bg-zinc-50',
        )}
      >
        <link rel="icon" href="/favicon.png" sizes="any" />

        <TranslationsProvider
          namespaces={[i18nNamespaces.HEADER, i18nNamespaces.FORM]}
          locale={locale}
          resources={resources}
        >
          <Header />
        </TranslationsProvider>

        <main className="flex-grow" role="main">
          {children}
        </main>

        <TranslationsProvider
          namespaces={[i18nNamespaces.FOOTER]}
          locale={locale}
          resources={resources}
        >
          <Footer footerData={footerData} />
        </TranslationsProvider>
      </body>
    </html>
  );
}
