import type { Metadata } from "next";
import { Inter, Poppins, Kumbh_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const kumbh = Kumbh_Sans({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });

export const metadata: Metadata = {
  title: "Instagram Viral Growth Course",
  description: "Go VIRAL And Become An Instagram Influencer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh.className}>{children}</body>
    </html>
  );
}
