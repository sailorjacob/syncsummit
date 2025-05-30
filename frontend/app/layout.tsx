import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Font setup
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Load local font for headings
const clashDisplay = localFont({
  src: [
    {
      path: '../fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
  display: 'swap',
});

// Mono font for code and technical elements
const mono = Inter({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Sync Summit - Connect Music Creators and Supervisors',
    template: '%s | Sync Summit'
  },
  description: 'Sync Summit connects music creators and supervisors to help bring music and media together in harmony.',
  keywords: ['music licensing', 'sync', 'music supervision', 'music for media', 'film music', 'tv music', 'advertising music'],
  authors: [{ name: 'Sync Summit Team' }],
  creator: 'Sync Summit',
  publisher: 'Sync Summit',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://syncsummit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sync Summit - Connect Music Creators and Supervisors',
    description: 'Sync Summit connects music creators and supervisors to help bring music and media together in harmony.',
    url: 'https://syncsummit.com',
    siteName: 'Sync Summit',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sync Summit - Connect Music Creators and Supervisors',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sync Summit - Connect Music Creators and Supervisors',
    description: 'Sync Summit connects music creators and supervisors to help bring music and media together in harmony.',
    creator: '@syncsummit',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
