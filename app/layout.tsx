import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yisafinance.com'),
  title: {
    default: "Yisa Finance Solutions - Expert Financial Services & Solutions",
    template: "%s | Yisa Finance Solutions"
  },
  description: "Transform your financial future with Yisa Finance Solutions. Expert guidance in home loans, commercial finance, and personalized financial strategies. Trusted by 500+ clients with $50M+ in successful loans.",
  keywords: [
    "finance solutions",
    "home loans",
    "commercial loans",
    "development finance",
    "financial planning",
    "mortgage broker",
    "business loans",
    "investment property loans",
    "first home buyer",
    "refinancing",
    "financial advisor"
  ],
  authors: [{ name: "Yisa Finance Solutions" }],
  creator: "Yisa Finance Solutions",
  publisher: "Yisa Finance Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yisafinance.com',
    title: 'Yisa Finance Solutions - Expert Financial Services & Solutions',
    description: 'Transform your financial future with Yisa Finance Solutions. Expert guidance in home loans, commercial finance, and personalized financial strategies.',
    siteName: 'Yisa Finance Solutions',
    images: [
      {
        url: '/yisa-logo.svg',
        width: 542,
        height: 295,
        alt: 'Yisa Finance Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yisa Finance Solutions - Expert Financial Services & Solutions',
    description: 'Transform your financial future with Yisa Finance Solutions. Expert guidance in home loans, commercial finance, and personalized financial strategies.',
    images: ['/yisa-logo.svg'],
    creator: '@yisafinance',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
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
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
