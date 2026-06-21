import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rahul R — Backend & Full-Stack Developer',
  description:
    'Software Developer specializing in Node.js, React.js and Next.js — building scalable APIs, integrations, and backend systems.',
  openGraph: {
    title: 'Rahul R — Backend & Full-Stack Developer',
    description:
      'Software Developer specializing in Node.js, React.js and Next.js.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
