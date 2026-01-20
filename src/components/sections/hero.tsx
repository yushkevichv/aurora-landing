'use client';


import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    return (
        <Section id="hero" className="h-screen min-h-[800px] flex flex-col pt-32 pb-12 overflow-hidden relative">

            {/* Background Layer - Fullscreen Image with specific blending */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/img/hero-bg.png"
                    alt="Construction Site"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                {/* Complex Gradient Mask to reveal text */}
                <div className="absolute inset-0 bg-gradient-to-b from-aurora-black via-transparent to-aurora-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-black/50 via-transparent to-aurora-black/50" />

                {/* Global Grain for this section */}
                <div className="absolute inset-0 opacity-20 bg-[url('/img/noise-texture.png')] mix-blend-overlay" />
            </div>

            <Container className="relative z-10 flex-1 flex flex-col justify-between">

                {/* TOP BAR INFO */}
                <div className="flex justify-between items-start border-t border-aurora-white/20 pt-6">
                    <div className="hidden md:block">
                        <p className="font-mono text-xs text-aurora-orange uppercase tracking-widest mb-1">Завод</p>
                        <p className="font-display font-bold text-xl text-white">МЕТАЛЛОКОНСТРУКЦИЙ</p>
                    </div>
                </div>

                {/* CENTER HERO TEXT - CLEAN & READABLE */}
                <div className="relative flex flex-col items-start justify-center flex-1 my-12">
                    <h1 className="font-display font-bold text-[12vw] md:text-[8rem] leading-[0.9] text-white uppercase text-left">
                        АВРОРА
                    </h1>

                    <p className="mt-8 font-mono text-base md:text-lg text-aurora-white/80 max-w-xl leading-relaxed">
                        Металлоконструкции, которые приносят вашему бизнесу прибыль, а не проблемы.
                        <br />
                        <span className="text-aurora-white/40 text-sm mt-4 block">
                            Проектирование. Производство. Монтаж.
                        </span>
                    </p>
                </div>

                {/* BOTTOM CONTROLS */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 text-white">
                    <div>
                        <Button variant="primary" size="lg" className="rounded-none px-12 h-16 text-lg tracking-widest bg-aurora-orange text-black hover:bg-white">
                            РАССЧИТАТЬ СМЕТУ
                        </Button>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-aurora-white/40">
                        <ArrowDown className="animate-bounce" />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
