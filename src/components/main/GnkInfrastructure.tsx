'use client'

import React from 'react';
import Button from "@/components/ui/Button";

const GnkInfrastructure = () => {
    return (
        <div>
            <div className="rounded-3xl py-10 bg-main-gradient flex flex-col gap-7 items-center text-white">
                <div className="text-5xl text-center w-fit"> Развитая инфраструктура GNK</div>
                <div className="px-20 text-xl text-center">На платформе GONKA уже обслуживаются десятки тысяч запросов к
                    AI ежедневно. Токен GNK торгуется на нескольких криптобиржах, предоставляя ликвидность участникам
                    экосистемы.
                </div>
                <div className="w-full mt-5 grid grid-cols-3 gap-20 text-center">
                    <div>
                        <div className="text-7xl">50м <i className="text-5xl">$</i></div>
                        <div className='mt-2 text-xl'>инвестиции от Bitfury</div>
                    </div>
                    <div>
                        <div className="text-7xl">30м <i className="text-5xl">GNK</i></div>
                        <div className='mt-2 text-xl'>токенов в обороте</div>
                    </div>
                    <div>
                        <div className="text-7xl">30 <i className="text-5xl">мин</i></div>
                        <div className='mt-2 text-xl'>деплой AI-приложения</div>
                    </div>
                </div>
            </div>
            <div className="my-10 mx-auto w-fit">
                <Button text={'Рассчитать конфигурацию'} onClick={() => {}}></Button>
            </div>
        </div>
    );
};

export default GnkInfrastructure;