'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import React from 'react';

export function Header() {
    const [isLight, setIsLight] = React.useState(false);
    const [isNavLight, setIsNavLight] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('section, [data-theme]');
            let topTheme = 'dark';
            let midTheme = 'dark';

            const midPoint = window.innerHeight / 2;

            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const theme = el.getAttribute('data-theme');
                if (!theme) return;

                // Для логотипа и контактов (верх шапки ~80px)
                if (rect.top <= 80) {
                    topTheme = theme;
                }
                // Для бокового меню (центр экрана)
                if (rect.top <= midPoint) {
                    midTheme = theme;
                }
            });

            setIsLight(topTheme === 'light');
            setIsNavLight(midTheme === 'light');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
                <Link href="/" className="group block md:p-4">
                    <div className="h-8 md:h-12 w-auto">
                        <Logo isLight={false} />
                    </div>
                </Link>
            </div>

            {/* TOP RIGHT: MENU TRIGGER (HAMBURGER REPLACEMENT) */}
            <div className="fixed bottom-4 right-4 md:top-8 md:right-8 z-50">
                <Button 
                    variant="ghost" 
                    className={`font-mono text-[10px] md:text-xs uppercase tracking-widest border transition-colors h-10 md:h-10 px-6 md:px-6 rounded-none cursor-pointer backdrop-blur-md ${
                        isLight 
                        ? 'text-black border-black/20 hover:bg-black hover:text-white hover:border-black bg-white/40' 
                        : 'text-white border-white/20 hover:bg-white hover:text-black hover:border-white bg-black/60 md:bg-black/40'
                    }`}
                    onClick={(e) => {
                        const el = document.querySelector('#contacts');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    КОНТАКТЫ
                </Button>
            </div>


            {/* RIGHT SIDE: VERTICAL NAV (OPTIONAL OR HUD) */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8">
                {['О производстве', 'Процесс', 'Работы'].map((item, i) => {
                    const href = ['#about', '#process', '#portfolio'][i];
                    return (
                        <a
                            key={item}
                            href={href}
                            onClick={(e) => scrollToSection(e, href)}
                            className={`writing-vertical-rl font-mono text-sm uppercase tracking-[0.2em] transition-all duration-300 py-4 ${
                                isNavLight 
                                ? 'text-aurora-orange hover:text-black' 
                                : 'text-white/60 hover:text-aurora-orange'
                            }`}
                        >
                            {item}
                        </a>
                    )
                })}
            </div>
        </>
    );
}

