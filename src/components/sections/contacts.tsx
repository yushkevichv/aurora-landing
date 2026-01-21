'use client';

import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Copy } from 'lucide-react';
import Image from 'next/image';

export function Contacts() {
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
    const [phone, setPhone] = React.useState('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('7') || value.startsWith('8')) {
            value = value.slice(1);
        }
        
        value = value.slice(0, 10);
        
        let formatted = '+7';
        if (value.length > 0) {
            formatted += ' (' + value.substring(0, 3);
        }
        if (value.length > 3) {
            formatted += ') ' + value.substring(3, 6);
        }
        if (value.length > 6) {
            formatted += '-' + value.substring(6, 8);
        }
        if (value.length > 8) {
            formatted += '-' + value.substring(8, 10);
        }
        
        setPhone(value.length === 0 ? '' : formatted);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <Section id="contacts" className="bg-aurora-gray text-aurora-white pt-32 pb-20 relative overflow-hidden grain-texture">
            <div className="absolute inset-0 pattern-grid-dark opacity-40" />
            
            <Container className="relative z-10">
                {/* Header */}
                <div className="mb-24">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-aurora-orange mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-aurora-orange"></span>
                        / Контакты
                    </p>
                    <h2 className="font-display text-[3.5rem] md:text-[6rem] uppercase text-white leading-[0.9] tracking-tight">
                        Обсудить <br /> <span className="text-white/10">Ваш Проект</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* LEFT: FORM (Clean Dark Card Style) */}
                    <div className="lg:col-span-7 bg-black/40 p-10 md:p-16 border border-white/5 backdrop-blur-sm shadow-2xl">
                        {status === 'success' ? (
                            <div className="h-[400px] flex flex-col justify-center items-center text-center space-y-6">
                                <div className="w-20 h-20 bg-aurora-orange/20 border border-aurora-orange rounded-full flex items-center justify-center">
                                    <ArrowUpRight className="text-aurora-orange w-10 h-10" />
                                </div>
                                <h3 className="font-display text-3xl uppercase">Данные отправлены</h3>
                                <p className="font-mono text-sm text-white/40 max-w-xs">
                                    Спасибо! Мы свяжемся с вами в ближайшее время для уточнения деталей.
                                </p>
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setStatus('idle')}
                                    className="text-white/60 hover:text-white"
                                >
                                    Отправить еще раз
                                </Button>
                            </div>
                        ) : (
                            <form className="space-y-12" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="group">
                                        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] mb-4 text-white group-focus-within:text-aurora-orange transition-colors">01_Ваше имя</label>
                                        <input 
                                            required
                                            type="text" 
                                            className="w-full bg-transparent border-b border-white/20 p-2 focus:outline-none focus:border-aurora-orange transition-colors font-display text-xl uppercase placeholder:text-white/30 text-white" 
                                            placeholder="Иван Иванов" 
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] mb-4 text-white group-focus-within:text-aurora-orange transition-colors">02_Телефон</label>
                                        <input 
                                            required
                                            type="tel" 
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
                                            className="w-full bg-transparent border-b border-white/20 p-2 focus:outline-none focus:border-aurora-orange transition-colors font-display text-xl uppercase placeholder:text-white/30 text-white" 
                                            placeholder="+7 (___) ___-__-__" 
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block font-mono text-[10px] uppercase tracking-[0.3em] mb-4 text-white group-focus-within:text-aurora-orange transition-colors">03_Детали проекта</label>
                                    <textarea 
                                        required
                                        rows={1} 
                                        className="w-full bg-transparent border-b border-white/20 p-2 focus:outline-none focus:border-aurora-orange transition-colors font-mono text-sm placeholder:text-white/30 text-white" 
                                        placeholder="Краткое описание задачи..." 
                                    />
                                </div>

                                <Button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full md:w-auto px-16 py-8 bg-aurora-orange text-white font-display font-medium text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-none cursor-pointer"
                                >
                                    {status === 'loading' ? 'Отправка...' : 'Отправить данные'}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* RIGHT: INFO */}
                    <div className="lg:col-span-5 pt-4">
                        <div className="space-y-16">
                            <div className="group">
                                <p className="font-mono text-[10px] text-aurora-orange uppercase tracking-[0.4em] mb-4">/ Прямая связь</p>
                                <div className="space-y-4">
                                    <a href="mailto:105@td-avrora.ru" className="block font-display text-3xl md:text-4xl hover:text-aurora-orange transition-colors border-b border-white/5 pb-2 text-white">
                                        105@td-avrora.ru
                                    </a>
                                    <a href="tel:89006476606" className="block font-display text-3xl md:text-4xl hover:text-aurora-orange transition-colors text-white">
                                        8 (900) 647-66-06
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">/ Офис</p>
                                    <p className="font-display text-lg uppercase leading-tight text-white/80">Санкт-Петербург, <br /> Ул. Губина д.16А, <br /> помещ. 68</p>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">/ Завод</p>
                                    <p className="font-display text-lg uppercase leading-tight text-white/80">Санкт-Петербург, <br /> ул. Челябинская 160</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Section */}
                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                        <a href="#" className="hover:text-aurora-orange transition-colors">Telegram</a>
                        <a href="#" className="hover:text-aurora-orange transition-colors">WhatsApp</a>
                        <a href="#" className="hover:text-aurora-orange transition-colors">ВКонтакте</a>
                    </div>
                    <div className="text-right">
                        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">
                            © 2008-2026 ЗМК АВРОРА // <span className="text-white/60">All rights reserved</span>
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
