'use client';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    return (
        <Section id="hero" className="h-screen min-h-[600px] md:min-h-[800px] relative overflow-hidden bg-aurora-black text-white">

            {/* 1. BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/hero-bg.png"
                    alt="Industrial Void"
                    fill
                    className="object-cover opacity-40 grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-aurora-black/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[url('/img/noise-texture.png')] opacity-30 mix-blend-overlay" />
            </div>

            {/* 2. MARQUEE */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center p-0 m-0 overflow-hidden pointer-events-none">
                <div className="flex animate-marquee whitespace-nowrap">
                    <h1 className="font-display font-bold text-[40vw] md:text-[30vw] leading-none text-aurora-orange opacity-[0.08] tracking-tighter select-none uppercase pr-40">
                        АВРОРА
                    </h1>
                    <h1 className="font-display font-bold text-[40vw] md:text-[30vw] leading-none text-aurora-orange opacity-[0.08] tracking-tighter select-none uppercase pr-40">
                        АВРОРА
                    </h1>
                </div>
            </div>

            {/* 3. CONTENT */}
            <div className="relative z-20 h-full w-full p-4 md:p-8 flex flex-col justify-between">
                <div className="h-24"></div>

                <div className="grid grid-cols-12 gap-4 h-full">
                    {/* LEFT */}
                    <div className="col-span-2 hidden md:flex items-end pb-24">
                        <div className="writing-vertical-rl font-display font-medium text-4xl md:text-6xl text-white/5 whitespace-nowrap uppercase tracking-widest">
                            AURORA_STEEL_PLANT
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className="col-span-12 md:col-span-8 flex flex-col justify-center items-center text-center">
                        <div className="relative z-30">
                            <h2 className="font-display font-bold text-6xl md:text-[10rem] w-full uppercase leading-[0.75] tracking-tighter mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                ЗАВОД <br />
                                <span className="text-aurora-orange">МЕТАЛЛО</span><br />
                                <span className="text-white">КОНСТРУКЦИЙ</span>
                            </h2>
                        </div>

                        <div className="flex flex-col items-center gap-8 mt-12 relative z-30">
                            <div className="flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-aurora-orange"></span>
                                <p className="font-mono text-xs md:text-sm text-white/60 uppercase tracking-[0.4em]">
                                    since 2008 / saint-petersburg
                                </p>
                                <span className="w-12 h-[1px] bg-aurora-orange"></span>
                            </div>
                            <p className="font-display text-xl md:text-3xl text-white/80 max-w-2xl text-center uppercase tracking-tight leading-tight">
                                Проектируем и производим <br /> 
                                <span className="text-white font-bold">несущие конструкции</span> для лидеров рынка
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-span-2 hidden md:flex flex-col justify-center items-end text-right">
                        <div className="h-48 w-[1px] bg-white/10 relative">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-aurora-orange"></div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 pt-12">
                    <div className="hidden md:flex flex-col items-center gap-2 group cursor-pointer">
                        <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest group-hover:text-aurora-orange transition-colors">Вниз</span>
                        <div className="w-[1px] h-12 bg-white/20 group-hover:bg-aurora-orange transition-colors relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-aurora-orange animate-slide-down" />
                        </div>
                    </div>

                    <div className="w-full md:w-auto">
                        <Button
                            className="w-full md:w-auto bg-aurora-orange text-white font-display font-bold text-2xl uppercase tracking-widest px-12 py-8 rounded-none border-2 border-transparent hover:bg-black hover:text-aurora-orange hover:border-aurora-orange transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none translate-x-0 hover:translate-x-[4px] hover:translate-y-[4px] cursor-pointer"
                            onClick={() => {
                                const el = document.querySelector('#contacts');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className="mr-4">РАССЧИТАТЬ ПРОЕКТ</span>
                            <ArrowDown className="text-current rotate-[-135deg]" size={24} />
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
// Cleaned end of file
