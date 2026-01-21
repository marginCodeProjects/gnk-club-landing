import React from 'react';
import Image from "next/image";

const TARGET_INFO = [
    {
        target: 'Инвесторы',
        description: 'Решение для тех, кто рассматривает GNK' +
            ' как долгосрочную ставку на AI-инфраструктуру.' +
            ' Прозрачная модель, реальные вычислительные нагрузки' +
            ' и участие в сети, которая масштабируется вместе' +
            ' с рынком искусственного интеллекта.'
    },
    {
        target: 'Команды',
        description: 'Подходит продуктовым и AI-командам,' +
            ' которым важно владеть и управлять вычислительными' +
            ' ресурсами напрямую. Контроль над оборудованием,' +
            ' гибкая конфигурация и отсутствие зависимости от централизованных платформ.'
    },
    {
        target: 'Профессионалы',
        description: 'Для тех, кто ценит стабильность, предсказуемость' +
            ' и технологическую независимость. Постоянная загрузка' +
            ' мощностей, понятная экономика и инфраструктура,' +
            ' готовая к реальной эксплуатации.'
    },
];

const TargetGroup = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-30 my-20">
                <div className="text-5xl text-center md:text-left text-[#344499] leading-[120%]">Кому подходит решение</div>
                <div className="text-base md:text-xl text-center md:text-left text-[#01040B]">
                    Инвесторам и командам, которые рассматривают майнинг GNK
                    как часть AI-инфраструктуры, хотят контролировать оборудование,
                    снизить влияние внешних платформ и получить стабильную рабочую конфигурацию.
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-7">
                <div className="px-7 pt-10 pb-15 rounded-3xl bg-main-gradient text-white">
                    <Image
                        src={'/blocks-icon-light.svg'}
                        alt='book'
                        width={44}
                        height={44}
                    />
                    <div className="mt-10 md:mt-15 mb-5 md:mb-10 text-3xl md:text-4xl">{TARGET_INFO[0].target}</div>
                    <div className="text-base md:text-xl">{TARGET_INFO[0].description}</div>
                </div>
                <div className="px-7 pt-10 pb-15 rounded-3xl bg-transparent-gradient text-[#034744]">
                    <Image
                        src={'/blocks-icon-dark.svg'}
                        alt='book'
                        width={44}
                        height={44}
                    />
                    <div className="mt-10 md:mt-15 md:mb-10 text-3xl md:text-4xl">{TARGET_INFO[1].target}</div>
                    <div className="text-base md:text-xl">{TARGET_INFO[1].description}</div>
                </div>
                <div className="px-7 pt-10 pb-15 rounded-3xl bg-transparent-gradient text-[#034744]">
                    <Image
                        src={'/blocks-icon-dark.svg'}
                        alt='book'
                        width={44}
                        height={44}
                    />
                    <div className="mt-10 md:mt-15 md:mb-10 text-3xl md:text-4xl">{TARGET_INFO[2].target}</div>
                    <div className="text-base md:text-xl">{TARGET_INFO[2].description}</div>
                </div>
            </div>
        </div>
    );
};

export default TargetGroup;