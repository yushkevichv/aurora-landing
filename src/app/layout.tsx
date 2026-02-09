import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google"; // Industrial & Tech fonts
import Script from "next/script";
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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106692598', 'ym');

            ym(106692598, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/106692598" style={{position: "absolute", left: "-9999px"}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
