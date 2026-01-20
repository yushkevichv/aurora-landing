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

                {/* Vertical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="group bg-white p-8 border border-gray-200 hover:border-aurora-orange/50 transition-colors shadow-sm hover:shadow-lg">
                            {/* Number */}
                            <span className="block font-mono text-xs text-aurora-orange uppercase tracking-widest mb-4">
                                {step.id}
                            </span>

                            {/* Title */}
                            <h3 className="font-display font-bold text-2xl uppercase text-aurora-black mb-4">
                                {step.title}
                            </h3>

                            {/* Divider */}
                            <div className="w-12 h-[2px] bg-gray-200 group-hover:bg-aurora-orange transition-colors mb-4" />

                            {/* Desc */}
                            <p className="font-mono text-sm text-gray-600 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
