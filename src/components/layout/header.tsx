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
            <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
                <Link href="/" className="group block">
                    <Image
                        src="/img/logo.svg"
                        alt="ЗМК АВРОРА"
                        width={180}
                        height={60}
                        className="w-auto h-8 md:h-16 object-contain"
                    />
                </Link>
            </div>

            {/* TOP RIGHT: MENU TRIGGER (HAMBURGER REPLACEMENT) */}
            <div className="fixed bottom-4 right-4 md:top-8 md:right-8 z-50">
                <Button 
                    variant="ghost" 
                    className="text-white font-mono text-[10px] md:text-xs uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black hover:border-white transition-colors h-10 md:h-10 px-6 md:px-6 rounded-none cursor-pointer bg-black/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
                    onClick={(e) => {
                        const el = document.querySelector('#contacts');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    КОНТАКТЫ
                </Button>
            </div>


            {/* RIGHT SIDE: VERTICAL NAV (OPTIONAL OR HUD) */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8 mix-blend-difference">
                {['О заводе', 'Процесс', 'Работы'].map((item, i) => {
                    const href = ['#about', '#process', '#portfolio'][i];
                    return (
                        <a
                            key={item}
                            href={href}
                            onClick={(e) => scrollToSection(e, href)}
                            className="writing-vertical-rl font-mono text-sm text-white/60 hover:text-aurora-orange uppercase tracking-[0.2em] transition-all duration-300 py-4"
                        >
                            {item}
                        </a>
                    )
                })}
            </div>
        </>
    );
}
