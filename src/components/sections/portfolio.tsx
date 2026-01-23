'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'Верстаки / Хранение',
        images: ['/img/projects/workbench.jpg'],
        video: null,
        desc: 'Проектирование и изготовление модульных систем хранения.'
    },
    {
        id: '02',
        title: 'Блочно-модульные здания',
        images: [
            '/img/projects/project2/project2.1.JPG',
            '/img/projects/project2/project2.2.JPG',
            '/img/projects/project2/project2.3.JPG',
            '/img/projects/project2/project2.4.JPG'
        ],
        video: null,
        desc: 'Производство контейнерных блоков с полной отделкой.'
    },
    {
        id: '03',
        title: 'Металлическая площадка тренажер для МЧС',
        images: [
            '/img/projects/project3/photo_2026-01-23 15.03.14.jpeg',
            '/img/projects/project3/photo_2026-01-23 15.03.17.jpeg'
        ],
        video: null,
        desc: 'Изготовление ферм для логистического терминала.'
    },
];

function Modal({ project, initialIndex, onClose }: { project: typeof projects[0], initialIndex: number, onClose: () => void }) {
    const [index, setIndex] = useState(initialIndex);

    const next = useCallback(() => setIndex((prev) => (prev + 1) % project.images.length), [project.images.length]);
    const prev = useCallback(() => setIndex((prev) => (prev - 1 + project.images.length) % project.images.length), [project.images.length]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [next, prev, onClose]);

    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 backdrop-blur-xl" onClick={onClose}>
            {/* Close Button */}
            <button 
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-aurora-orange transition-all z-10000 p-4 bg-white/5 hover:bg-white/10 rounded-full group" 
                onClick={onClose}
                aria-label="Close"
            >
                <X size={32} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-24" onClick={e => e.stopPropagation()}>
                <div className="relative w-full h-full max-h-[80vh] aspect-video">
                    <Image
                        src={project.images[index]}
                        alt={project.title}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {project.images.length > 1 && (
                    <>
                        <button 
                            onClick={prev} 
                            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md border border-white/10"
                        >
                            <ChevronLeft size={32} strokeWidth={1.5} />
                        </button>
                        <button 
                            onClick={next} 
                            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md border border-white/10"
                        >
                            <ChevronRight size={32} strokeWidth={1.5} />
                        </button>
                    </>
                )}

                <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                    <p className="font-display text-xl md:text-2xl uppercase tracking-widest text-white mb-2">{project.title}</p>
                    <p className="font-mono text-xs md:text-sm text-white/40 uppercase tracking-widest">{index + 1} / {project.images.length}</p>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, onOpenModal }: { project: typeof projects[0], onOpenModal: (index: number) => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.log("Video play failed:", err));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div 
            className="group cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onOpenModal(currentIndex)}
        >
            {/* Image/Video Container */}
            <div className="relative aspect-4/5 mb-8 overflow-hidden bg-aurora-gray">
                {project.video ? (
                    <>
                        <video
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <source src={project.video} type="video/mp4" />
                        </video>
                        <Image
                            src={project.images[currentIndex]}
                            alt={project.title}
                            fill
                            className={`object-cover grayscale transition-all duration-700 opacity-60 ${isHovered ? 'opacity-0 scale-105' : 'opacity-60'}`}
                        />
                    </>
                ) : (
                    <Image
                        src={project.images[currentIndex]}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    />
                )}
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <button 
                            onClick={prevImage}
                            className="w-12 h-12 bg-black/60 hover:bg-aurora-orange text-white flex items-center justify-center backdrop-blur-md transition-all rounded-full border border-white/10"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="w-12 h-12 bg-black/60 hover:bg-aurora-orange text-white flex items-center justify-center backdrop-blur-md transition-all rounded-full border border-white/10"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                )}

                {/* Dot indicators */}
                {project.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.images.map((_, i) => (
                            <div 
                                key={i} 
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    i === currentIndex ? 'bg-aurora-orange w-4' : 'bg-white/30'
                                }`}
                            />
                        ))}
                    </div>
                )}

                {/* Industrial Number Overlay */}
                <div className="absolute top-6 left-6 font-display text-2xl text-white opacity-40 group-hover:opacity-100 transition-opacity z-10">
                    /{project.id}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-aurora-black to-transparent opacity-40" />
            </div>

            {/* Content */}
            <div className="border-l border-white/10 pl-8 group-hover:border-aurora-orange transition-colors duration-500">
                <h3 className="font-display text-xl sm:text-2xl uppercase mb-3 text-white">
                    {project.title}
                </h3>
                <p className="font-mono text-sm text-white/40 leading-relaxed uppercase tracking-widest">
                    {project.desc}
                </p>
            </div>
        </div>
    );
}

export function Portfolio() {
    const [activeProject, setActiveProject] = useState<{project: typeof projects[0], index: number} | null>(null);

    return (
        <Section id="portfolio" data-theme="dark" className="py-32 bg-aurora-black text-aurora-white relative overflow-hidden grain-texture">
            <div className="absolute inset-0 pattern-grid-dark opacity-30" />
            
            <Container className="relative">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12 pt-12 md:pt-0">
                    <div className="max-w-2xl">
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-aurora-orange mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-aurora-orange"></span>
                            / Портфолио
                        </p>
                        <h2 className="text-[2rem] sm:text-[3.5rem] md:text-[5.5rem] font-display uppercase font-medium leading-[0.9] tracking-tight text-white">
                            Наши <span className="text-aurora-orange">Работы</span>
                        </h2>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onOpenModal={(index) => setActiveProject({ project, index })}
                        />
                    ))}
                </div>

                {/* Custom CTA Card inspired by Pugofka */}
                <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
                    <p className="font-display text-3xl md:text-4xl uppercase text-white/60 max-w-xl">
                        Готовы обсудить <span className="text-white">ваш следующий проект?</span>
                    </p>
                    <Button 
                        className="w-full md:w-auto bg-aurora-orange text-white font-display font-medium text-lg sm:text-xl uppercase tracking-widest px-8 sm:px-12 py-6 sm:py-8 rounded-none hover:bg-white transition-all duration-500 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none cursor-pointer"
                        onClick={() => {
                            const el = document.querySelector('#contacts');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Обсудить проект
                    </Button>
                </div>
            </Container>

            {activeProject && (
                <Modal 
                    project={activeProject.project} 
                    initialIndex={activeProject.index} 
                    onClose={() => setActiveProject(null)} 
                />
            )}
        </Section>
    );
}
