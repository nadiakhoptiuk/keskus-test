import './globals.css';

import { Inter } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

import { Footer } from '@/app/(shared)/components/layout/Footer';
import { Header } from '@/app/(shared)/components/layout/Header';
import { classnames } from '@/app/(shared)/utils/classnames';

import type { Metadata } from 'next';
import type { WithChildren } from '@/app/(shared)/types/common.types';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ukraina Keskus',
  description: 'A starter for Next.js projects.',
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en">
      <body
        className={classnames(
          inter.className,
          'flex h-full min-h-screen flex-col bg-slate-50',
        )}
      >
        <Header />

        <main className="flex-grow" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
