'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import {useModal} from "@/providers/ModalProvider";

const TariffsSection = () => {
    const {openStart} = useModal();

    return (
        <div className="rounded-3xl bg-transparent">
            <div className="mx-аuto py-16 md:py-24 text-white">
                <h2 className="text-4xl md:text-5xl text-center md:text-left mb-12">
                    Тарифы и условия работы
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
                    <div className="
                        rounded-3xl border border-white/70
                        p-5 pb-10 md:p-10 flex
                        flex-col gap-7 justify-between"
                    >
                        <div>
                            <div className="text-3xl mb-1">
                                <b><i>Настройка без покупки сервера</i></b>
                            </div>
                            <div className="text-white/80 text-base md:text-xl">
                                Для тех, у кого сервер уже есть
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 md:gap-4 mt-4">
                            <div className="grid grid-cols-2">
                                <div className="flex items-end gap-4">
                                    <span className="text-6xl md:text-5xl"><i><b>350$</b></i></span>
                                    <span className="text-white/80">разово</span>
                                </div>
                                <span className="ml-5 mr-auto mt-auto text-white"><b>Настройка</b></span>
                            </div>

                            <div className="grid grid-cols-2">
                                <div className="flex items-end gap-4">
                                    <span className="text-6xl md:text-5xl "><i><b>250$</b></i></span>
                                    <span className="text-white/80">/мес</span>
                                </div>
                                <span className="ml-5 mr-auto mt-auto text-white"><b>Поддержка</b></span>
                            </div>

                            <Button
                                text="Срок: от 1 дня"
                                onClick={() => {
                                }}
                                type="transparent"
                            />

                            <Button
                                text="Оставить заявку"
                                onClick={openStart}
                                type="white"
                            />
                        </div>
                    </div>

                    <div className="
                        relative rounded-3xl p-5 pb-10
                        md:p-10 flex flex-col gap-7 justify-between
                        bg-light-green-gradient text-[#083F3C]"
                    >
                        <div className="absolute top-0 -translate-y-1/2 right-4 md:right-8 bg-white rounded-3xl px-6 py-3 text-[#087672] text-base md:text-xl">
                            <i>Популярно</i>
                        </div>
                        <div>
                            <div className="text-3xl mb-1">
                                <b><i>Сервер под ключ</i></b>
                            </div>
                            <div className="text-base md:text-xl text-[#087672]">
                                Готовый запуск без самостоятельных закупок
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 md:gap-4 mt-4">
                            <div className="grid grid-cols-2">
                                <div className="flex items-end gap-4">
                                    <span className="text-6xl md:text-5xl "><i><b>250$</b></i></span>
                                    <span className="">разово</span>
                                </div>
                                <span className="ml-5 mr-auto mt-auto"><b>Настройка</b></span>
                            </div>

                            <div className="grid grid-cols-2">
                                <div className="flex items-end gap-4">
                                    <span className="text-6xl md:text-5xl "><i><b>200$</b></i></span>
                                    <span className="">/мес</span>
                                </div>
                                <span className="ml-5 mr-auto mt-auto"><b>Поддержка</b></span>
                            </div>
                            <Button
                                text="Срок: от 1 дня"
                                onClick={() => {
                                }}
                                type="custom"
                                className="bg-white/17 text-[#087672] border-[#E0DED8]"
                            />

                            <Button
                                text="Оставить заявку"
                                onClick={openStart}
                                type="custom"
                                className='bg-[#087672] text-white'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TariffsSection;
