'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FileText, Ruler, Truck, Zap, ShieldCheck, HardHat } from 'lucide-react';

const steps = [
    { id: '01', title: 'Анализ ТЗ', desc: 'Детальный разбор чертежей и нагрузок.', icon: FileText },
    { id: '02', title: 'Проект', desc: 'Разработка КМД в средах BIM/CAD.', icon: Ruler },
    { id: '03', title: 'Закупка', desc: 'Прямые поставки металла с комбинатов.', icon: Truck },
    { id: '04', title: 'Производство', desc: 'Лазерная резка, роботизированная сварка.', icon: Zap },
    { id: '05', title: 'Контроль', desc: 'УЗК-дефектоскопия каждого шва.', icon: ShieldCheck },
    { id: '06', title: 'Монтаж', desc: 'Собственные бригады и техника.', icon: HardHat },
];

export function Process() {
    return (
        <Section id="process" className="py-32 bg-aurora-concrete text-aurora-black relative overflow-hidden grain-texture">
            <div className="absolute inset-0 pattern-grid-light opacity-60" />

            <Container className="relative z-10">
                {/* HEADLINE */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 pt-12 md:pt-0">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-aurora-orange mb-6 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-aurora-orange"></span>
                            / Производство
                        </p>
                        <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] uppercase text-aurora-black leading-[0.9] tracking-tight">
                            Технологический <br /> <span className="text-black/20">Процесс</span>
                        </h2>
                    </div>
                    <div className="hidden md:block max-w-xs border-l border-black/10 pl-8 pb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                            Сквозной контроль качества на каждом этапе: от анализа входящей документации до финального монтажа.
                        </p>
                    </div>
                </div>

                {/* STEPS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.id} className="group relative p-8 md:p-10 border-b border-r border-black/5 hover:bg-white transition-all duration-500">
                            {/* Number Overlay */}
                            <div className="absolute top-8 right-8 font-display text-4xl text-black/5 group-hover:text-aurora-orange/10 transition-colors duration-500">
                                /{step.id}
                            </div>
                            
                            {/* Icon */}
                            <div className="mb-6 md:mb-10 text-aurora-black group-hover:text-aurora-orange transition-colors duration-500">
                                <step.icon size={32} strokeWidth={1.2} />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="font-display text-2xl uppercase mb-4 text-aurora-black group-hover:text-black group-hover:translate-x-2 transition-all duration-500">
                                    {step.title}
                                </h3>
                                <p className="font-mono text-sm text-gray-400 group-hover:text-black/80 leading-relaxed transition-colors duration-500">
                                    {step.desc}
                                </p>
                            </div>
                            
                            {/* Bottom Indicator */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-aurora-orange group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
