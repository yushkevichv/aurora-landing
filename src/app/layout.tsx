import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google"; // Industrial & Tech fonts
import "./globals.css";
import { Noise } from "@/components/ui/noise";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ЗМК «Аврора» | Металлоконструкции в Санкт-Петербурге",
  description: "Производственная компания полного цикла. Металлоконструкции, которые приносят прибыль.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${oswald.variable} ${jetbrainsMono.variable} antialiased bg-aurora-black text-white selection:bg-aurora-orange selection:text-white`}
      >
        <Noise />
        {children}
      </body>
    </html>
  );
}
