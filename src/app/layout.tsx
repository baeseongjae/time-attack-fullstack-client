import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Providers from "./_providers";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
