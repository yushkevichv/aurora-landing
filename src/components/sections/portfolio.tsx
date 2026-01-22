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
        <Section id="portfolio" className="py-32 bg-aurora-black text-aurora-white relative overflow-hidden grain-texture">
            <div className="absolute inset-0 pattern-grid-dark opacity-30" />
            
            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 pt-12 md:pt-0">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-aurora-orange mb-6 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-aurora-orange"></span>
                            / Портфолио
                        </p>
                        <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] font-display uppercase font-medium leading-[0.9] tracking-tight">
                            Наши <br /><span className="text-white/20">Знаковые</span> <span className="text-aurora-orange">Объекты</span>
                        </h2>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-aurora-gray">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                                />
                                {/* Industrial Number Overlay */}
                                <div className="absolute top-6 left-6 font-display text-2xl text-white opacity-40 group-hover:opacity-100 transition-opacity">
                                    /{project.id}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-aurora-black to-transparent opacity-40" />
                            </div>

                            {/* Content */}
                            <div className="border-l border-white/10 pl-8 group-hover:border-aurora-orange transition-colors duration-500">
                                <h3 className="font-display text-2xl uppercase mb-3 text-white">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs text-white/40 leading-relaxed uppercase tracking-widest">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom CTA Card inspired by Pugofka */}
                <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
                    <p className="font-display text-3xl md:text-4xl uppercase text-white/60 max-w-xl">
                        Готовы обсудить <span className="text-white">ваш следующий проект?</span>
                    </p>
                    <Button 
                        className="bg-aurora-orange text-white font-display font-medium text-xl uppercase tracking-widest px-12 py-8 rounded-none hover:bg-white transition-all duration-500 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none cursor-pointer"
                        onClick={() => {
                            const el = document.querySelector('#contacts');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Обсудить проект
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
