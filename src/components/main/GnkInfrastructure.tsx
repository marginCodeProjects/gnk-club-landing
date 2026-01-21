'use client'

import React from 'react';
import Button from "@/components/ui/Button";
import {useModal} from "@/providers/ModalProvider";

const GnkInfrastructure = () => {
    const { openCalculator } = useModal()

    return (
        <div>
            <div className="rounded-3xl py-10 bg-main-gradient flex flex-col gap-7 items-center text-white">
                <div className="text-4xl md:text-5xl text-center w-fit"> Развитая инфраструктура GNK</div>
                <div className="px-3 md:px-20 text-base md:text-xl text-center">На платформе GONKA уже обслуживаются десятки тысяч запросов к
                    AI ежедневно. Токен GNK торгуется на нескольких криптобиржах, предоставляя ликвидность участникам
                    экосистемы.
                </div>
                <div className="w-full mt-5 grid md:grid-cols-3 gap-15 md:gap-20 text-center">
                    <div>
                        <div className="text-6xl md:text-7xl">50м <i className="text-6xl md:text-5xl">$</i></div>
                        <div className='mt-2 text-base md:text-xl'>инвестиции от Bitfury</div>
                    </div>
                    <div>
                        <div className="text-6xl md:text-7xl">30м <i className="text-6xl md:text-5xl">GNK</i></div>
                        <div className='mt-2 text-base md:text-xl'>токенов в обороте</div>
                    </div>
                    <div>
                        <div className="text-6xl md:text-7xl">30 <i className="text-6xl md:text-5xl">мин</i></div>
                        <div className='mt-2 text-base md:text-xl'>деплой AI-приложения</div>
                    </div>
                </div>
            </div>
            <div className="my-10 md:mx-auto w-full md:w-fit">
                <Button text={'Рассчитать конфигурацию'} onClick={openCalculator} className="w-full md:w-auto"></Button>
            </div>
        </div>
    );
};

export default GnkInfrastructure;