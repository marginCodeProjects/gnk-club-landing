'use client'

import React from 'react';
import Image from 'next/image';
import Button from "@/components/ui/Button";

const disadvantages = [
    {
        title: 'Переговоры с провайдерами',
        description: 'Минимум 7 дней на старт = $369 потерь',
    },
    {
        title: 'Риск ошибок при настройке',
        description: 'Минимум сутки потерь = $53 убытка',
    },
    {
        title: 'Простои без вознаграждения',
        description: 'В среднем 5 дней/месяц = $264 потерь',
    },
];

const advantages = [
    {
        title: 'Запуск за 1 день',
        description: 'Без ожидания и переговоров',
    },
    {
        title: 'Готовая настройка',
        description: 'Без риска ошибок и простоев',
    },
    {
        title: 'Стабильная работа',
        description: 'Максимальный аптайм и вознаграждения',
    },
];

const MANUAL_PRICE = [
    {
        title: 'Первый месяц за 8 GPU:',
        value: '$18,160',
    },
    {
        title: 'Следующие месяцы:',
        value: '$14,784/мес',
    },
];

const GNK_CLUB_PRICE = [
    {
        title: 'Любой месяц:',
        value: '$10,368/мес',
    },
    {
        title: 'Экономия 1-го месяца:',
        value: '$7,792',
    },
];

const GnkClubAdvantages = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-7 my-20">
                <div className="text-4xl md:text-5xl text-center md:text-left text-[#344499] leading-[120%]">Преимущества работы с GNK.CLUB</div>
                <div className="text-base md:text-xl text-center md:text-left text-[#01040B]">
                    Самостоятельная аренда GPU начинается от $2.2/час,
                    но реальная себестоимость значительно выше из-за простоев,
                    ошибок настройки и времени на переговоры.
                    <b>
                        С GNK.CLUB вы получаете профессиональное решение под ключ за $1.8/час
                        за GPU и старт за 1 день.
                    </b>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-base md:text-xl">
                <div className="border-gray-300 border-2 px-4 md:px-10 pt-7 pb-5 rounded-3xl">
                    <div className="flex gap-4 items-center mb-5 md:mb-10">
                        <Image
                            src={'/book.svg'}
                            alt='book'
                            width={72}
                            height={72}
                        />
                        <div>
                            <div className="my-2 text-xl md:text-2xl">
                                <b><i>Самостоятельная настройка</i></b>
                            </div>
                            <div className="my-2 text-gray-400">
                                от $17.6/час за 8 GPU
                            </div>
                        </div>
                    </div>
                    <div>
                        {disadvantages.map(item =>
                            <div key={item.title} className="flex mx-4 gap-4 md:gap-10 items-center my-5">
                                <Image
                                    src={'/minus-outline.svg'}
                                    alt='minus'
                                    width={31}
                                    height={31}
                                />
                                <div>
                                    <div>
                                        <b>{item.title}</b>
                                    </div>
                                    <div>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-3 rounded-3xl bg-[#087672]/17 px-4 py-7 md:p-7">
                        {MANUAL_PRICE.map(item =>
                            <div key={item.title} className="flex justify-between">
                                <div className="text-gray-400">{item.title}</div>
                                <b>{item.value}</b>
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-main-gradient text-white px-4 md:px-10 rounded-3xl pt-7 pb-5">
                    <div className="flex gap-4 items-center mb-5 md:mb-10">
                        <Image
                            src={'/flash.svg'}
                            alt='flash'
                            width={72}
                            height={72}
                        />
                        <div>
                            <div className="my-2 text-xl md:text-2xl">
                                <b><i>GNK.CLUB под ключ</i></b>
                            </div>
                            <div className="my-2 text-gray-200">
                                от $14.4/час за 8 GPU
                            </div>
                        </div>
                    </div>
                    <div>
                        {advantages.map(item =>
                            <div key={item.title} className="flex mx-4 gap-4 md:gap-10 items-center my-5">
                                <Image
                                    src={'/plus.svg'}
                                    alt='plus'
                                    width={31}
                                    height={31}
                                />
                                <div>
                                    <div>
                                        <b>{item.title}</b>
                                    </div>
                                    <div>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 rounded-3xl bg-white/17 px-4 py-7 md:p-7">
                        {GNK_CLUB_PRICE.map(item =>
                            <div key={item.title} className="flex justify-between">
                                <div className="text-gray-200">{item.title}</div>
                                <b>{item.value}</b>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-30 md:mx-auto w-full md:w-fit">
                <Button text={'Рассчитать конфигурацию'} onClick={() => {}} className="w-full md:w-auto"></Button>
            </div>
        </div>
    );
};

export default GnkClubAdvantages;