import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: "Next 2025 Course (Under react 18)",
  description: "Next 15 & React 18 Crush Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.className} antialiased`}
      // className={`antialiased`}
      >
        {/* <Providers> */}
          {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
