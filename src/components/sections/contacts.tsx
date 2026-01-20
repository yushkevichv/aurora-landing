'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Copy } from 'lucide-react';
import Image from 'next/image';

export function Contacts() {
    return (
        <Section id="contacts" className="bg-aurora-concrete text-aurora-black pt-24 pb-12">
            <Container>
                {/* Header */}
                <div className="mb-16">
                    <p className="font-mono text-xs uppercase tracking-widest text-aurora-orange mb-2">/ Контакты</p>
                    <h2 className="font-display text-4xl md:text-5xl uppercase text-aurora-black">
                        Рассчитать <br /> Проект
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT: FORM (Clean White Card) */}
                    <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-sm border border-gray-200">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block font-mono text-xs uppercase tracking-widest mb-3 text-gray-500">Ваше имя</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-aurora-orange transition-colors font-display text-lg uppercase" placeholder="Иван Иванов" />
                                </div>
                                <div>
                                    <label className="block font-mono text-xs uppercase tracking-widest mb-3 text-gray-500">Телефон</label>
                                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-aurora-orange transition-colors font-display text-lg uppercase" placeholder="+7 (999) 000-00-00" />
                                </div>
                            </div>
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-widest mb-3 text-gray-500">Комментарий</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-aurora-orange transition-colors font-mono text-sm" placeholder="Опишите задачу..." />
                            </div>

                            <Button className="w-full md:w-auto px-12 bg-aurora-orange text-white hover:bg-black transition-colors">
                                Отправить заявку
                            </Button>
                        </form>
                    </div>

                    {/* RIGHT: INFO (Clean Typography) */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div className="space-y-12">
                            <div>
                                <p className="font-mono text-xs text-aurora-orange uppercase tracking-widest mb-2">Почта</p>
                                <a href="mailto:105@td-avrora.ru" className="font-display text-3xl hover:text-aurora-orange transition-colors">
                                    105@td-avrora.ru
                                </a>
                            </div>

                            <div>
                                <p className="font-mono text-xs text-aurora-orange uppercase tracking-widest mb-2">Телефон</p>
                                <a href="tel:89006476606" className="font-display text-3xl hover:text-aurora-orange transition-colors">
                                    8 (900) 647-66-06
                                </a>
                            </div>

                            <div className="pt-8 border-t border-gray-200">
                                <div className="mb-8">
                                    <strong className="block font-display text-lg uppercase mb-2">Офис</strong>
                                    <p className="font-mono text-gray-600">Санкт-Петербург, Ул. Губина д.16А, помещ. 68</p>
                                </div>
                                <div>
                                    <strong className="block font-display text-lg uppercase mb-2">Производство</strong>
                                    <p className="font-mono text-gray-600">Санкт-Петербург, ул. Челябинская 160</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-gray-500 uppercase tracking-widest">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#" className="hover:text-aurora-orange transition-colors">Telegram</a>
                        <a href="#" className="hover:text-aurora-orange transition-colors">WhatsApp</a>
                        <a href="#" className="hover:text-aurora-orange transition-colors">ВКонтакте</a>
                    </div>
                    <p>© ЗМК АВРОРА 2008-2025</p>
                </div>
            </Container>
        </Section>
    );
}
