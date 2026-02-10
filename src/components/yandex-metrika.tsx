"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const METRIKA_ID = 106692598;

export function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    (function (m: any, e: Document, t: string, r: string, i: string) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = Date.now();
      const k = e.createElement(t) as HTMLScriptElement;
      const a = e.getElementsByTagName(t)[0];
      k.async = true;
      k.src = r;
      a.parentNode!.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window.ym(METRIKA_ID, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }, []);

  useEffect(() => {
    window.ym?.(METRIKA_ID, "hit", window.location.href);
  }, [pathname, searchParams]);

  return null;
}

declare global {
  interface Window {
    ym: any;
  }
}
