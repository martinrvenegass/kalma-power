import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kalmapower.com"),
  title: "KALMA POWER | Plantas eléctricas diésel de 10 a 2500 kW",
  description:
    "KALMA POWER comercializa plantas eléctricas diésel de 10 a 2500 kW, de distintas marcas, para aplicaciones industriales, comerciales y de respaldo.",
  keywords: [
    "plantas eléctricas",
    "generadores industriales",
    "energía de respaldo",
    "grupos electrógenos",
    "KALMA POWER",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KALMA POWER | Plantas eléctricas diésel",
    description:
      "Plantas eléctricas diésel de 10 a 2500 kW para aplicaciones industriales, comerciales y de respaldo. Equipos de distintas marcas.",
    url: "https://kalmapower.com",
    siteName: "KALMA POWER",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/images/kalma-hero.png",
        width: 1672,
        height: 941,
        alt: "Planta eléctrica diésel KALMA POWER",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3a8a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
