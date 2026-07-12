import type { Metadata } from "next";
import { Bebas_Neue, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-number",
});

export const metadata: Metadata = {
  title: "Built Tough by Bryan",
  description:
    "Premium performance apparel built through discipline and worn with purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}