import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { ApartmentProvider } from "@/context/ApartmentContext";
import { API_URL } from "@/api";

const geistMono = Poppins({
  weight: ["400", "600"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await fetch(`${API_URL}api/apartments/`, {
    cache: "no-store",
  });
  const apartments = await res.json();
  return (
    <html lang="uk">
      <body className={`${geistMono.className} `}>
        <ApartmentProvider initialApartments={apartments}>
          <main>{children}</main>
        </ApartmentProvider>
        {/* <CookiesComponent /> */}
      </body>
    </html>
  );
}
