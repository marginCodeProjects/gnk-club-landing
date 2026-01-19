import React from 'react';
import Image from "next/image";

const advantages = [
    {
        icon: '/economics.svg',
        title: 'Экономика устойчивее',
        description: 'Фиксированная цена мощности,' +
            ' выгодная стоимость серверов и отсутствие' +
            ' арендных наценок снижают влияние колебаний курсов и загрузки сети.',
        list: [
            'Фиксированная цена без скачков тарифов',
            'Выгодная стоимость серверов без посредников',
            'Защита от колебаний курсов и загрузки сети',
            'Инфраструктура с запасом стабильности',
        ]
    },
    {
        icon: '/growth.svg',
        title: 'Готово к росту',
        description: 'Решение масштабируется добавлением серверов' +
            ' и GPU без остановки текущей работы и без смены архитектуры.',
        list: [
            'Масштабирование без остановки работы',
            'Добавление GPU без смены архитектуры',
            'Независимость от внешних платформ',
            'Гибкая конфигурация под задачи',
        ]
    },
];

const InfrastructureAdvantages = () => {
    return (
        <div className="text-white">
            <div className="text-5xl mb-12">Преимущества собственной инфраструктуры</div>
            <div className="grid grid-cols-2 grid-rows-[auto_auto_auto_1fr] gap-10">
                {advantages.map((item) => (
                    <div key={item.title} className="grid grid-rows-subgrid row-span-4 gap-7">
                        <Image src={item.icon} alt={'icon'} width={74} height={74}/>
                        <div className="text-4xl">
                            {item.title}
                        </div>
                        <div className="text-xl text-white max-w-xl">
                            {item.description}
                        </div>
                        <div className="flex flex-col gap-5">
                            {item.list.map(adv =>
                                <div key={adv} className="flex gap-10 items-center">
                                    <Image
                                        src={'/plus.svg'}
                                        alt={'plus'}
                                        width={31}
                                        height={31}
                                    />
                                    <div className="text-xl">{adv}</div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfrastructureAdvantages;