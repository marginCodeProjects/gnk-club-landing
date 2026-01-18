'use client'

import React from 'react';
import Button from "@/components/ui/Button";

const GnkMainInfo = () => {
    return (
        <div className="text-white bg-transparent">
            <div className="flex justify-between items-stretch gap-11">
                <div className="flex-shrink-0">
                    <div className="text-7xl leading-tight tracking-tight whitespace-nowrap">Майнинг GNK</div>
                    <div className="font-accent text-7xl leading-none tracking-tighter">под ключ</div>
                    <div className="mt-4 text-xl">Фиксированная цена $1.8 в час за 1 H100. <br/> Надежный сервис для майнинга в сети GNK</div>
                </div>
                <div className="flex flex-col justify-between flex-1 max-w-sm">
                    <div className="text-xl">Готовое серверное решение для участия в распределённой AI-сети GNK без сборки, экспериментов и ручной настройки.</div>
                    <Button text={"Рассчитать конфигурацию"} onClick={() => {}} type='transparent'/>
                </div>
            </div>
            <div className="mt-20 flex gap-20">
                <div>
                    <div className="text-6xl"><i className="text-5xl" >от</i>1,8<i className="text-5xl">$</i></div>
                    <div className='mt-2 text-xl'>цена майнинга <br/> в час за одну H100</div>
                </div>
                <div>
                    <div className="text-6xl">1<i className="text-5xl">день</i></div>
                    <div className='mt-2 text-xl'>Запуск готового<br/>сервера под ключ</div>
                </div>
                <div>
                    <div className="text-6xl">10k<i className="text-5xl">$</i></div>
                    <div className='mt-2 text-xl'>готовая Barebone-<br/>система на 8 GPU</div>
                </div>
            </div>
        </div>
    );
};

export default GnkMainInfo;