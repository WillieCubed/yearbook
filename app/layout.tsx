import React from 'react';
import { Be_Vietnam_Pro } from '@next/font/google';
import "./globals.css";

const displayFont = Be_Vietnam_Pro({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-display',
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={displayFont.className}>
      <body className="dark:bg-slate-900 dark:text-slate-100">{children}</body>
    </html>
  );
}