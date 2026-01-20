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

                {/* Clean Industrial List */}
                <div className="border-t border-aurora-black/10">
                    {steps.map((step) => (
                        <div key={step.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-aurora-black/10 items-start hover:bg-white/50 transition-colors">

                            {/* Number */}
                            <div className="col-span-1 md:col-span-2">
                                <span className="font-mono text-xs text-aurora-orange/80 uppercase tracking-widest">
                                    /{step.id}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="col-span-1 md:col-span-4">
                                <h3 className="font-display font-medium text-2xl uppercase text-aurora-black">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="col-span-1 md:col-span-6">
                                <p className="font-mono text-sm text-aurora-black/60 leading-relaxed max-w-lg">
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
