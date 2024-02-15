import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Bobopedia",
   description: "Wikipedia for DOTA2 bobos.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="font-gabarito">{children}</body>
      </html>
   );
}
