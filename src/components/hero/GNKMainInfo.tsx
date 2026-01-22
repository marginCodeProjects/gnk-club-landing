'use client'

import React from 'react';
import Button from "@/components/ui/Button";
import {useModal} from "@/providers/ModalProvider";

const GnkMainInfo = () => {
    const {openCalculator} = useModal();

    return (
        <div className="text-white bg-transparent">
            <div
                className="
                    flex flex-col gap-10
                    lg:flex-row lg:justify-between lg:items-stretch lg:gap-11
                "
            >
                <div className="flex-shrink-0">
                    <div
                        className="
                            text-4xl leading-tight tracking-tight
                            lg:text-7xl lg:whitespace-nowrap
                        "
                    >
                        Майнинг GNK
                    </div>

                    <div
                        className="
                            font-accent leading-none tracking-tighter
                            text-4xl
                            lg:text-7xl
                        "
                    >
                        под ключ
                    </div>

                    <div
                        className="
                            mt-4 text-base
                            lg:text-xl
                        "
                    >
                        Фиксированная цена $1.8 в час за 1 H100.
                        <br />
                        Надежный сервис для майнинга в сети GNK
                    </div>

                    <div
                        className="
                            mt-12 flex flex-row gap-3 text-center
                            md:gap-10
                            lg:mt-20 lg:gap-20 lg:text-left
                        "
                    >
                        <div>
                            <div className="text-5xl lg:text-6xl">
                                <i className="text-3xl lg:text-5xl">от</i>
                                1,8
                                <i className="text-3xl lg:text-5xl">$</i>
                            </div>
                            <div className="mt-2 text-sm lg:text-xl">
                                цена майнинга <br /> в час за одну H100
                            </div>
                        </div>

                        <div>
                            <div className="text-5xl lg:text-6xl">
                                1<i className="text-3xl lg:text-5xl">день</i>
                            </div>
                            <div className="mt-2 text-sm lg:text-xl">
                                Запуск готового<br />сервера под ключ
                            </div>
                        </div>

                        <div>
                            <div className="text-5xl lg:text-6xl">
                                10k<i className="text-3xl lg:text-5xl">$</i>
                            </div>
                            <div className="mt-2 text-sm lg:text-xl">
                                готовая Barebone-<br />система на 8 GPU
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="
                        mt-7 md:mt-0 flex flex-col gap-6
                        lg:gap-15 lg:flex-1 lg:max-w-sm
                    "
                >
                    <div className="text-base lg:text-xl">
                        Готовое серверное решение для участия в распределённой
                        AI-сети GNK без сборки, экспериментов и ручной настройки.
                    </div>

                    <Button
                        text="Рассчитать конфигурацию"
                        onClick={openCalculator}
                        type="transparent"
                        className="w-full lg:w-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default GnkMainInfo;