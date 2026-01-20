'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
    {
        id: '01',
        title: 'Верстаки / Хранение',
        image: '/img/projects/workbench.jpg',
        desc: 'Проектирование и изготовление модульных систем хранения.'
    },
    {
        id: '02',
        title: 'Блочно-модульные здания',
        image: '/img/projects/container.jpg',
        desc: 'Производство контейнерных блоков с полной отделкой.'
    },
    {
        id: '03',
        title: 'Фермы покрытия',
        image: '/img/projects/truss.jpg',
        desc: 'Изготовление ферм для логистического терминала.'
    },
];

export function Portfolio() {
    return (
        <Section id="portfolio" className="bg-aurora-black py-24 text-aurora-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-aurora-orange mb-2">/ Объекты</p>
                        <h2 className="text-4xl md:text-5xl font-display uppercase font-medium">
                            Наши <span className="text-aurora-orange">Проекты</span>
                        </h2>
                    </div>
                </div>

                {/* Industrial Slider (Horizontal Scroll) */}
                <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {projects.map((project) => (
                        <div key={project.id} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center group">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-white/5 border border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="pr-4">
                                <span className="block font-mono text-xs text-aurora-orange/60 mb-2">
                                    /{project.id}
                                </span>
                                <h3 className="font-display text-2xl uppercase mb-3 text-white group-hover:text-aurora-orange transition-colors">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-sm text-aurora-white/60 leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Spacer for padding at the end */}
                    <div className="min-w-[5vw]" />
                </div>

            </Container>
        </Section>
    );
}
