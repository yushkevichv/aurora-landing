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
        <Section id="process" className="py-24 bg-aurora-concrete text-aurora-black">
            <Container>
                {/* HEADLINE */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-aurora-orange mb-2">/ Процесс</p>
                        <h2 className="font-display text-4xl md:text-5xl uppercase text-aurora-black leading-tight">
                            От чертежа <br /> до объекта
                        </h2>
                    </div>
                    <div className="hidden md:block max-w-sm">
                        <p className="font-mono text-sm text-gray-600 leading-relaxed">
                            Полный цикл производства позволяет нам контролировать сроки и качество на каждом этапе.
                        </p>
                    </div>
                </div>

                {/* MODULAR GRID V5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-white p-8 border border-gray-200 hover:border-aurora-orange transition-colors duration-300 group flex flex-col justify-between min-h-[280px]">

                            {/* TOP: Icon & Number */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-gray-50 rounded-sm group-hover:bg-aurora-orange group-hover:text-white transition-colors duration-300 text-aurora-black">
                                    <step.icon size={24} strokeWidth={1.5} />
                                </div>
                                <span className="font-mono text-xs text-gray-300 group-hover:text-aurora-orange/60 transition-colors">
                                    /{step.id}
                                </span>
                            </div>

                            {/* BOTTOM: Text */}
                            <div>
                                <h3 className="font-display font-medium text-2xl uppercase text-aurora-black mb-3">
                                    {step.title}
                                </h3>
                                <p className="font-mono text-sm text-gray-500 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
