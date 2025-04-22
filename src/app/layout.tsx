import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header/Header";

const geistMono = Poppins({
  weight: ["400", "600"], // Вибір необхідних ваг шрифта
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSBB27 – Home Management",
  applicationName: "OSBB27",
  description:
    "An app for OSBB27 homeowners: manage bills, vote, stay updated with news, and provide feedback.",

  // icons: "/favicon.ico",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} `}>
        <main>{children}</main>
        {/* <CookiesComponent /> */}
      </body>
    </html>
  );
}
