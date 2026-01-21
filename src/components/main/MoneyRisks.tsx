'use client'

import React from 'react';
import Button from "@/components/ui/Button";
import Image from "next/image";

const MoneyRisks = () => {
    return (
        <div className="
            my-20 rounded-3xl overflow-hidden
            bg-blue-gradient text-white grid
            grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1
            gap-7 items-stretch"
        >
            <div className="flex flex-col gap-7 mt-20 mx-7 md:my-10 md:ml-7">
                <div className="text-4xl">Где чаще всего теряют деньги</div>
                <div className="text-base md:text-xl">
                    Ошибки в подборе GPU, настройке софта и работе с нодами GNK приводят
                    к простоям и нестабильным наградам.
                    <b>
                         Мы закрываем эти риски за счёт готовых проверенных конфигураций.
                    </b>
                </div>
                <div className="w-full md:w-fit">
                    <Button text={'Рассчитать конфигурацию'} onClick={() => {}} type='transparent' className="w-full md:w-auto"/>
                </div>
            </div>
            <div className="relative w-full min-h-[320px] md:min-h-full">
                <Image
                    src="/server-image.png"
                    alt="server"
                    fill
                    className="object-cover object-right-bottom"
                    priority
                />
            </div>
        </div>
    );
};

export default MoneyRisks;