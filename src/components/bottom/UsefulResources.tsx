import React from 'react';
import Image from "next/image";

const resouces = [
    {
        title: 'GNK.CLUB',
        description: 'Главный ресурс нашего продукта'
    },
    {
        title: 'Токеномика GNK',
        description: 'Экономическая модель и распределение токенов'
    },
    {
        title: 'GONKA AI',
        description: 'Вычисления на базе искусственного интеллекта — новая валюта'
    },
    {
        title: 'Telegram GNK.CLUB',
        description: 'Подписывайся на наш канал'
    },
    {
        title: 'Instagram GNK.CLUB',
        description: 'Подписывайся на нашу страницу'
    },{
        title: 'Facebook GNK.CLUB',
        description: 'Подписывайся на нашу страницу'
    },
];

const UsefulResources = () => {
    return (
        <div className="hidden lg:block text-white my-20">
            <div className="text-4xl md:text-5xl text-center md:text-left mb-7">Полезные ресурсы</div>
            <div className="text-base md:text-xl text-center md:text-left md:w-1/3 mb-10">
                Узнайте больше о GNK.CLUB и децентрализованных вычислениях
            </div>
            <div className="grid md:grid-cols-6 gap-5">
                {resouces.map(item =>
                    <div key={item.title} className="rounded-3xl border border-white py-7 px-5 flex flex-col">
                        <div className="flex-grow">
                            <div className="text-xl md:text-2xl min-h-12">{item.title}</div>
                            <div className="text-sm">{item.description}</div>
                        </div>

                        <div className="text-lg flex justify-between items-center">
                            <i>Перейти</i>
                            <Image
                                src={'/arrow-up.svg'}
                                alt={'link'}
                                width={48}
                                height={48}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UsefulResources;