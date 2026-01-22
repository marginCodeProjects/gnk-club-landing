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
        target: 'Энтузиасты',
        description: 'Мы выдаём сервера за день и лишаем их необходимости' +
            ' вести переговоры от лица их клиентов с компаниями сдающими' +
            ' как и мы железо следовательно они могут быстрее обрабатывать' +
            ' заказы и больше зарабатывать. Отличная цена для таких специалистов,' +
            ' ниже себестоимость для их клиентов, выше ценность в глазах клиентов'
    },
    {
        target: 'Частные инвесторы',
        description: 'Для тех, кто хочет понять, как работают инвестиции на практике,' +
            ' без сложного входа и избыточных рисков. Коллективный пул' +
            ' с готовой инфраструктурой, прозрачной логикой работы и' +
            ' поддержкой на каждом этапе. Настройка и техническое сопровождение' +
            ' предоставляются бесплатно через сайт нашего пула.'
    },
];

const TargetGroup = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-30 my-20">
                <div className="text-5xl text-center md:text-left text-[#344499] leading-[120%]">Кому подходит решение</div>
                <div className="text-base md:text-xl text-center md:text-left text-[#01040B]">
                    Для инвесторов, которые хотят быть частью стремительно развивающегося AI‑рынка,
                    не тратя время на техническую экспертизу.
                </div>
            </div>
            <div className="grid xl:grid-cols-3 gap-7">
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