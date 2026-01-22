'use client';

import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Copy, Paperclip, X } from 'lucide-react';
import Image from 'next/image';
import { sendEmail } from '@/app/actions/send-email';

export function Contacts() {
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [phone, setPhone] = React.useState('');
    const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            const validFiles = newFiles.filter(file => {
                if (file.size > 10 * 1024 * 1024) { // 10MB limit
                    alert(`Файл ${file.name} слишком большой. Максимальный размер — 10МБ.`);
                    return false;
                }
                return true;
            });
            setSelectedFiles(prev => [...prev, ...validFiles]);
        }
    };

    const removeFile = (index: number) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        
        const formData = new FormData(e.currentTarget);
        
        // Remove individual files added by the default form and append our tracked files
        formData.delete('files');
        selectedFiles.forEach(file => {
            formData.append('files', file);
        });

        const result = await sendEmail(formData);
        
        if (result.success) {
            setStatus('success');
            setSelectedFiles([]); // Reset files on success
        } else {
            setStatus('error');
        }
    };

    return (
        <Section id="contacts" className="bg-aurora-gray text-aurora-white pt-32 pb-20 relative overflow-hidden grain-texture">
            <div className="absolute inset-0 pattern-grid-dark opacity-40" />
            
            <Container className="relative z-10">
                {/* Header */}
                <div className="mb-24">
                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-aurora-orange mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-aurora-orange"></span>
                        / Контакты
                    </p>
                    <h2 className="font-display text-[2rem] sm:text-[3.5rem] md:text-[6rem] uppercase text-white leading-[0.9] tracking-tight">
                        Обсудить <br /> <span className="text-white/10">Ваш Проект</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* LEFT: FORM (Clean Dark Card Style) */}
                    <div className="lg:col-span-7 bg-black/40 p-6 sm:p-10 md:p-16 border border-white/5 backdrop-blur-sm shadow-2xl">
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
                        ) : status === 'error' ? (
                            <div className="h-[400px] flex flex-col justify-center items-center text-center space-y-6">
                                <h3 className="font-display text-3xl uppercase text-red-500">Ошибка отправки</h3>
                                <p className="font-mono text-sm text-white/40 max-w-xs">
                                    К сожалению, произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.
                                </p>
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setStatus('idle')}
                                    className="text-white/60 hover:text-white"
                                >
                                    Попробовать снова
                                </Button>
                            </div>
                        ) : (
                            <form className="space-y-12" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="group">
                                        <label className="block font-mono text-xs uppercase tracking-[0.3em] mb-4 text-white group-focus-within:text-aurora-orange transition-colors">01_Ваше имя</label>
                                        <input 
                                            required
                                            name="name"
                                            type="text" 
                                            className="w-full bg-transparent border-b border-white/20 p-2 focus:outline-none focus:border-aurora-orange transition-colors font-display text-xl uppercase placeholder:text-white/30 text-white" 
                                            placeholder="Иван Иванов" 
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block font-mono text-xs uppercase tracking-[0.3em] mb-4 text-white group-focus-within:text-aurora-orange transition-colors">02_Телефон</label>
                                        <input 
                                            required
                                            name="phone"
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
                                    <label className="block font-mono text-xs uppercase tracking-[0.3em] mb-4 text-white group-focus-within:text-aurora-orange transition-colors">03_Детали проекта</label>
                                    <textarea 
                                        required
                                        name="message"
                                        rows={1} 
                                        className="w-full bg-transparent border-b border-white/20 p-2 focus:outline-none focus:border-aurora-orange transition-colors font-mono text-base placeholder:text-white/30 text-white" 
                                        placeholder="Краткое описание задачи..." 
                                    />
                                </div>

                                <div className="space-y-6">
                                    <label className="block font-mono text-xs uppercase tracking-[0.3em] text-white">04_Прикрепить файлы</label>
                                    <div className="flex flex-wrap gap-4">
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="flex items-center gap-3 px-6 py-4 border border-white/10 hover:border-aurora-orange hover:text-aurora-orange transition-all duration-300 group"
                                        >
                                            <Paperclip size={18} className="text-white/40 group-hover:text-aurora-orange transition-colors" />
                                            <span className="font-mono text-xs uppercase tracking-widest">Выбрать файлы</span>
                                        </button>
                                        <input 
                                            type="file" 
                                            name="files"
                                            multiple
                                            className="hidden" 
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                        />
                                    </div>

                                    {selectedFiles.length > 0 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedFiles.map((file, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-white/5 border border-white/5">
                                                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/60 truncate max-w-[200px]">
                                                        {file.name}
                                                    </span>
                                                    <button 
                                                        type="button"
                                                        onClick={() => removeFile(index)}
                                                        className="text-white/20 hover:text-red-500 transition-colors"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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
                                <p className="font-mono text-xs text-aurora-orange uppercase tracking-[0.4em] mb-4">/ Прямая связь</p>
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
                                    <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">/ Офис</p>
                                    <p className="font-display text-lg uppercase leading-tight text-white/80">г Санкт-Петербург, <br />вн.тер.г муниципальный округ Волковское, <br />ул Салова, 61 / строение 1, <br />помещ 4041н</p>
                                </div>
                                <div>
                                    <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">/ Завод</p>
                                    <p className="font-display text-lg uppercase leading-tight text-white/80">Санкт-Петербург, <br /> ул. Челябинская 160</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
