'use client'

import React from 'react';
import Button from "@/components/ui/Button";
import Image from "next/image";

const LaunchPrice = () => {
    return (
        <div className="mb-20 rounded-3xl bg-white grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-7">
            <div className="flex flex-col gap-10 mt-10 mx-7 md:my-10 md:ml-7">
                <div className="text-4xl text-[#034744]">Запустите GNK-инфраструктуру за 1 день</div>
                <div className="text-xl">
                    NVIDIA H100. от $1.8 в час за карту. Вход от $10 000.
                </div>
                <div className="w-fit">
                    <Button
                        text={'Получить расчет'}
                        onClick={() => {}}
                        type='custom'
                        className="bg-[#BEDBDA47]/28 border border-[#034744]"
                    />
                </div>
            </div>
            <div className='relative w-full h-[320px] md:h-full'>
                <Image src={'/graphics-card.png'} alt={'card'} fill className='object-cover object-right'/>
            </div>
        </div>
    );
};

export default LaunchPrice;