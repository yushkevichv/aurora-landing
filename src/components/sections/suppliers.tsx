'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';

const suppliers = [
    { name: 'ТМК', logo: '/img/clients/tmk.png' },
    { name: 'Северсталь', logo: '/img/clients/severstal.png' },
    { name: 'ОМК', logo: '/img/clients/omk.png' },
    { name: 'ММК', logo: '/img/clients/mmk.png' },
    { name: 'Мечел', logo: '/img/clients/mechel.png' },
];

export function Suppliers() {
    return (
        <section className="bg-white py-20 border-y border-black/5 overflow-hidden relative">
            <div className="absolute inset-0 pattern-grid-light opacity-40" />
            
            <div className="container mx-auto px-4 mb-12 relative z-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-colors duration-500 text-center cursor-default">
                    / Надежные поставщики сырья
                </p>
            </div>

            <div className="marquee-container relative">
                <div className="flex gap-24 md:gap-48 animate-marquee whitespace-nowrap items-center py-4">
                    {[...suppliers, ...suppliers, ...suppliers, ...suppliers].map((s, i) => (
                        <div key={i} className="flex items-center gap-4 shrink-0 opacity-30 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 scale-90 hover:scale-100">
                            <div className="relative w-32 h-16 md:w-48 md:h-24">
                                <Image
                                    src={s.logo}
                                    alt={s.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
