import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Inconsolata } from 'next/font/google';
import './globals.css';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Styling Practice',
    default: 'Styling Practice',
  },
  description:
    'This project is a collection of styling experiments using Tailwind CSS and CSS Modules in Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${inconsolata.variable} scroll-smooth`}>
      <body className='text-gray flex min-h-screen flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
