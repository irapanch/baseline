import type { Metadata } from "next";
import {  Metal} from "next/font/google";
import "./globals.css";



const geistMono = Metal({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = { 
  title: "OSBB27 – Home Management", 
  applicationName: "OSBB27",
  description: "An app for OSBB27 homeowners: manage bills, vote, stay updated with news, and provide feedback.",

  icons: "/icons/icon-512x512.png", 
  manifest: "/manifest.json", 

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geistMono.className}
      >
        {children}
      </body>
    </html>
  );
}
