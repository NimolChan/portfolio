import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteNav } from "./components/site-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chan Nimol | Network Infrastructure Engineer",
  description: "Chan Nimol, Network Infrastructure Engineer based in Phnom Penh, Cambodia."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
