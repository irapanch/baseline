import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { ReduxProvider } from "@/components/ReduxProvider";

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
  return (
    <html lang="uk">
      <body className={`${geistMono.className} `}>
        <ReduxProvider>
          <main>{children}</main>
        </ReduxProvider>

        {/* <CookiesComponent /> */}
      </body>
    </html>
  );
}
