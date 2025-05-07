import type { Metadata } from "next";

import { ThemeProvider } from '@/context/ThemeContext';
import { ActiveSectionProvider } from '@/context/ActiveSectionContext';
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Lelis",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionProvider>
            {children}
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
