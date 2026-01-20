'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Header() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* TOP LEFT: LOGO */}
            <div className="fixed top-8 left-8 z-50 mix-blend-difference">
                <Link href="/" className="group block">
                    <Image
                        src="/logo.png"
                        alt="ЗМК АВРОРА"
                        width={180}
                        height={60}
                        className="w-auto h-12 md:h-16 object-contain brightness-0 invert"
                    />
                </Link>
            </div>

            {/* TOP RIGHT: MENU TRIGGER (HAMBURGER REPLACEMENT) */}
            <div className="fixed top-8 right-8 z-50 mix-blend-difference">
                <Button variant="ghost" className="text-white font-mono text-xs uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black hover:border-white transition-colors h-10 px-6 rounded-none">
                    <a href="#contacts">Меню / Связь</a>
                </Button>
            </div>

            {/* BOTTOM LEFT: STATUS INDICATORS */}
            <div className="fixed bottom-8 left-8 z-50 hidden md:flex flex-col gap-2 mix-blend-difference pointer-events-none">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-aurora-orange animate-pulse" />
                    <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">
                        ПРОИЗВОДСТВО: АКТИВНО
                    </span>
                </div>
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    САНКТ-ПЕТЕРБУРГ / 2025
                </span>
            </div>

            {/* RIGHT SIDE: VERTICAL NAV (OPTIONAL OR HUD) */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8 mix-blend-difference">
                {['О заводе', 'Процесс', 'Проекты'].map((item, i) => {
                    const href = ['#about', '#process', '#portfolio'][i];
                    return (
                        <a
                            key={item}
                            href={href}
                            onClick={(e) => scrollToSection(e, href)}
                            className="writing-vertical-rl font-mono text-xs text-white/40 hover:text-aurora-orange uppercase tracking-widest transition-colors py-4"
                        >
                            {item}
                        </a>
                    )
                })}
            </div>
        </>
    );
}
