'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

const steps = [
    { id: '01', title: 'АНАЛИЗ ТЗ', desc: 'Детальный разбор чертежей и нагрузок.' },
    { id: '02', title: 'ПРОЕКТ', desc: 'Разработка КМД в средах BIM/CAD.' },
    { id: '03', title: 'ЗАКУПКА', desc: 'Прямые поставки металла с комбинатов.' },
    { id: '04', title: 'ПРОИЗВОДСТВО', desc: 'Лазерная резка, роботизированная сварка.' },
    { id: '05', title: 'КОНТРОЛЬ', desc: 'УЗК-дефектоскопия каждого шва.' },
    { id: '06', title: 'МОНТАЖ', desc: 'Собственные бригады и техника.' },
];

export function Process() {
    return (
        <Section id="process" className="py-24 bg-aurora-concrete text-aurora-black">
            <Container>
                {/* SECTION LABEL */}
                <div className="mb-16">
                    <p className="font-mono text-xs uppercase tracking-widest text-aurora-orange mb-2">/ Процесс</p>
                    <h2 className="font-display text-4xl md:text-5xl uppercase text-aurora-black">
                        Производственный <br /> Цикл
                    </h2>
                </div>

                {/* Industrial Manifest Grid - Raw & Technical */}
                <div className="border-t border-aurora-black/20">
                    {steps.map((step, i) => (
                        <div key={step.id} className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-aurora-black/20 hover:bg-white transition-colors duration-300">

                            {/* Step Number */}
                            <div className="col-span-1 md:col-span-2">
                                <span className="font-display text-4xl text-aurora-orange/60 group-hover:text-aurora-orange transition-colors">
                                    {step.id}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="col-span-1 md:col-span-4">
                                <h3 className="font-display font-medium text-3xl uppercase text-aurora-black mb-2">
                                    {step.title}
                                </h3>
                                {/* Decorative 'Status' badge */}
                                <div className="inline-flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-aurora-black/20 group-hover:bg-aurora-orange transition-colors" />
                                    <span className="font-mono text-[10px] uppercase text-aurora-black/40 tracking-widest">
                                        System_Check_OK
                                    </span>
                                </div>
                            </div>

                            {/* Description - Technical look */}
                            <div className="col-span-1 md:col-span-6 border-l border-aurora-black/10 md:pl-8">
                                <p className="font-mono text-gray-600 leading-relaxed max-w-md my-4 md:my-0">
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
