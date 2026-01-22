'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

import Image from 'next/image';

const benefits = [
    'СКОРОСТЬ x2',
    'ИЗДЕРЖКИ -30%',
    'ГАРАНТИЯ 50 ЛЕТ'
];

export function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <Section id="about" className="py-32 bg-aurora-black text-aurora-white relative overflow-hidden grain-texture">
            <div className="absolute inset-0 pattern-grid-dark opacity-50" />
            
            <Container ref={containerRef} className="relative z-10">
                {/* 1. EDITORIAL HEADLINE */}
                <div className="mb-24 pt-12 md:pt-0">
                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-aurora-orange mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-aurora-orange"></span>
                        / О компании
                    </p>
                    <h2 className="font-display font-medium text-[1.75rem] sm:text-[3.5rem] md:text-[6rem] leading-[0.9] uppercase max-w-4xl tracking-tight">
                        Архитекторы <br />
                        <span className="text-white/20">индустриального</span> <br />
                        <span className="text-aurora-orange">роста.</span>
                    </h2>
                </div>

                {/* 2. CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left: Statement */}
                    <div className="lg:col-span-5">
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 border-l-2 border-aurora-orange pl-8">
                            Мы проектируем и производим несущие металлоконструкции, которые становятся фундаментом для масштабных строительных проектов. Наш подход — это сочетание инженерной точности и понимания бизнес-процессов заказчика.
                        </p>
                    </div>

                        {/* Right: Steps/Benefits in Pugofka Style */}
                    <div className="lg:col-span-6 lg:col-start-7 space-y-12 md:space-y-16">
                        {[
                            {
                                id: '01',
                                title: 'Полный производственный цикл',
                                desc: 'От разработки КМД и статических расчетов до антикоррозийной защиты и доставки на объект.'
                            },
                            {
                                id: '02',
                                title: 'Цифровой контроль качества',
                                desc: 'Используем BIM-моделирование и автоматизированные линии резки для достижения идеальной геометрии.'
                            },
                            {
                                id: '03',
                                title: 'Бескомпромиссные сроки',
                                desc: 'Мы понимаем стоимость простоя. Каждый этап производства синхронизирован с графиком строительства.'
                            }
                        ].map((item) => (
                            <div key={item.id} className="group">
                                <div className="flex items-baseline gap-4 sm:gap-6 border-b border-white/10 pb-8 group-hover:border-aurora-orange transition-colors duration-500">
                                    <span className="font-mono text-lg sm:text-xl text-aurora-orange shrink-0">/{item.id}</span>
                                    <div>
                                        <h4 className="font-display text-lg sm:text-2xl uppercase mb-4 text-white group-hover:text-aurora-orange transition-colors duration-500 leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className="font-mono text-sm sm:text-base text-white/40 leading-relaxed max-w-md">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
