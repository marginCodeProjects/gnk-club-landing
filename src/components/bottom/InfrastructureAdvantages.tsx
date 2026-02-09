import React from 'react';
import Image from "next/image";

const advantages = [
    {
        icon: '/economics.svg',
        title: 'Экономика устойчивее',
        description: 'Более выгодные цены на аренду, ' +
            'достигнутые путём уменьшения кол-ва посредников' +
            ' в цепочке позволят оставаться в плюсе даже при колебаниях курса монеты.',
        list: [
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
            'Гибкая конфигурация под задачи',
            'Система мониторинга нод GONKA позволяет масштабировать без риска потери денег',
        ]
    },
];

const InfrastructureAdvantages = () => {
    return (
        <div className="text-white">
            <div className="text-4xl md:text-5xl text-center md:text-left mb-12">Преимущества собственной инфраструктуры</div>
            <div className="grid md:grid-cols-2 grid-rows-[auto_auto_auto_1fr] gap-10">
                {advantages.map((item) => (
                    <div key={item.title} className="grid grid-rows-subgrid row-span-4 gap-10 md:gap-7">
                        <Image src={item.icon} alt={'icon'} width={74} height={74}/>
                        <div className="text-3xl md:text-4xl">
                            {item.title}
                        </div>
                        <div className="text-base md:text-xl text-white max-w-xl">
                            {item.description}
                        </div>
                        <div className="flex flex-col gap-5">
                            {item.list.map(adv =>
                                <div key={adv} className="flex gap-3 md:gap-10 items-center">
                                    <Image
                                        src={'/plus.svg'}
                                        alt={'plus'}
                                        width={31}
                                        height={31}
                                    />
                                    <div className="text-base md:text-xl">{adv}</div>
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