'use client';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { ArrowDown, Play } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    return (
        <Section id="hero" className="h-screen min-h-[800px] relative overflow-hidden bg-aurora-black text-white">

            {/* 1. THE MONOLITH BACKGROUND (Video/Image) */}
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

            {/* 2. MASSIVE TYPOGRAPHY MASK */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-0 m-0 overflow-hidden pointer-events-none mix-blend-overlay">
                <h1 className="font-display font-bold text-[25vw] leading-none text-white opacity-10 tracking-tighter select-none whitespace-nowrap">
                    AVRORA
                </h1>
            </div>

            {/* 3. FOREGROUND CONTENT (ANTI-LAYOUT) */}
            <div className="relative z-20 h-full w-full p-4 md:p-8 flex flex-col justify-between">

                {/* Spacer for Top Nav */}
                <div className="h-24"></div>

                {/* Main Content - Scattered */}
                <div className="grid grid-cols-12 gap-4 h-full">

                    {/* LEFT: VERTICAL TEXT */}
                    <div className="col-span-2 hidden md:flex items-end pb-24">
                        <div className="writing-vertical-rl font-display font-medium text-4xl md:text-6xl text-white/20 whitespace-nowrap">
                            ПРОМЫШЛЕННЫЕ РЕШЕНИЯ
                        </div>
                    </div>

                    {/* CENTER: THE STATEMENT */}
                    <div className="col-span-12 md:col-span-8 flex flex-col justify-center items-center text-center">
                        <h2 className="font-display font-bold text-6xl md:text-8xl w-full uppercase leading-[0.85] tracking-tight mix-blend-difference mb-8">
                            ЗАВОД <br />
                            <span className="text-aurora-orange">МЕТАЛЛО</span><br />
                            КОНСТРУКЦИЙ
                        </h2>

                        <div className="flex items-center gap-6 mt-8">
                            <span className="h-[2px] w-12 bg-aurora-orange"></span>
                            <p className="font-mono text-sm md:text-base text-gray-400 max-w-md text-left">
                                Производим несущие конструкции любой сложности для промышленных объектов РФ и СНГ.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: DECORATIVE DATA */}
                    <div className="col-span-2 hidden md:flex flex-col justify-center items-end text-right font-mono text-[10px] text-aurora-orange/60 gap-4">
                        <p>ШИРОТА: 59.9343</p>
                        <p>ДОЛГОТА: 30.3351</p>
                        <p>НАГРУЗКА: 100%</p>
                        <div className="h-32 w-[1px] bg-aurora-orange/20"></div>
                    </div>
                </div>

                {/* 4. BOTTOM INTERFACE (HUD) */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 pt-12">

                    {/* SCROLL TRIGGER */}
                    <div className="hidden md:flex flex-col items-center gap-2 group cursor-pointer">
                        <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest group-hover:text-aurora-orange transition-colors">Вниз</span>
                        <div className="w-[1px] h-12 bg-white/20 group-hover:bg-aurora-orange transition-colors relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-aurora-orange animate-slide-down" />
                        </div>
                    </div>

                    {/* THE LEVER (CTA) */}
                    <div className="w-full md:w-auto">
                        <Button
                            className="w-full md:w-auto bg-aurora-orange text-black font-display font-bold text-2xl uppercase tracking-widest px-12 py-8 rounded-none border-2 border-transparent hover:bg-black hover:text-aurora-orange hover:border-aurora-orange transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none translate-x-0 hover:translate-x-[4px] hover:translate-y-[4px]"
                        >
                            <span className="mr-4">Отправить проект</span>
                            <ArrowDown className="text-current rotate-[-135deg]" size={24} />
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
