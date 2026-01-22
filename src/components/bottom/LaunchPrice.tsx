'use client'

import React from 'react';
import Button from "@/components/ui/Button";
import Image from "next/image";
import {useModal} from "@/providers/ModalProvider";

const LaunchPrice = () => {
    const {openStart} = useModal();

    return (
        <div className="my-20 lg:mt-0 lg:mb-20 rounded-3xl bg-white grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-7">
            <div className="order-2 lg:order-1 flex flex-col gap-10 mb-10 mx-7 md:my-10 md:ml-7">
                <div className="text-4xl text-[#034744]">Запустите GNK-инфраструктуру за 1 день</div>
                <div className="text-xl">
                    NVIDIA H100. от $1.8 в час за карту. Вход от $10 000.
                </div>
                <div className="w-full md:w-fit">
                    <Button
                        text={'Получить расчет'}
                        onClick={openStart}
                        type='custom'
                        className="bg-[#BEDBDA47]/28 border border-[#034744] w-full md:w-auto"
                    />
                </div>
            </div>
            <div className='order-1 lg:order-2 relative w-full h-[320px] md:h-full'>
                <Image src={'/graphics-card.png'} alt={'card'} fill className='hidden lg:block object-cover object-right'/>
                <Image src={'/graphics-mobile.png'} alt={'card'} fill className='block lg:hidden object-cover object-right'/>
            </div>
        </div>
    );
};

export default LaunchPrice;