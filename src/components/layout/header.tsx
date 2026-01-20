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
        <header className="fixed top-0 left-0 right-0 z-50 bg-aurora-black/80 backdrop-blur-md border-b border-white/10">
            <Container className="flex items-center justify-between py-4">
                {/* LOGO */}
                <Link href="/" className="relative z-50 group mix-blend-difference">
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-2xl tracking-tighter text-white group-hover:text-aurora-orange transition-colors">
                            ЗМК АВРОРА
                        </span>
                        <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest group-hover:text-aurora-orange/60 transition-colors">
                            Санкт-Петербург
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    {['О заводе', 'Процесс', 'Проекты', 'Контакты'].map((item, i) => {
                        const href = ['#about', '#process', '#portfolio', '#contacts'][i];
                        return (
                            <a
                                key={item}
                                href={href}
                                onClick={(e) => scrollToSection(e, href)}
                                className="font-mono text-xs uppercase tracking-widest text-aurora-white/70 hover:text-aurora-orange transition-colors"
                            >
                                {item}
                            </a>
                        );
                    })}
                </nav>

                {/* CTA */}
                <Button variant="outline" size="sm" className="hidden md:flex hover:bg-aurora-orange hover:text-black hover:border-aurora-orange transition-colors">
                    <a href="#contacts" onClick={(e) => scrollToSection(e, '#contacts')}>
                        Рассчитать проект
                    </a>
                </Button>

                {/* MOBILE BURGER (Simple) */}
                <div className="md:hidden">
                    <Button variant="ghost" size="sm" className="text-white">
                        <a href="#contacts">Меню</a>
                    </Button>
                </div>
            </Container>
        </header>
    );
}
