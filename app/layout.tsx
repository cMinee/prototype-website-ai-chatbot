import * as React from 'react';
import type { Metadata } from "next";
import ThemeRegistry from '@/components/ThemeRegistry';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Next.js App Router + MUI",
  description: "Next.js App Router + MUI v6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
