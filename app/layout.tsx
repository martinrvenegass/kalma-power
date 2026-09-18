import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lunaanenergy.com"),
  title: "KALMA POWER | Plantas eléctricas 10 kW – 2500 kW",
  description:
    "KALMA POWER diseña, instala y da servicio a plantas eléctricas industriales de 10 kW a 2500 kW para minería, hotelería, data centers, hospitales, construcción y manufactura.",
  keywords: [
    "plantas eléctricas",
    "generadores industriales",
    "energía de respaldo",
    "grupos electrógenos",
    "KALMA POWER",
  ],
  openGraph: {
    title: "KALMA POWER | El futuro es la energía",
    description:
      "Plantas eléctricas de 10 kW a 2500 kW. Ingeniería, instalación y servicio para la industria.",
    type: "website",
    locale: "es_MX",
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
