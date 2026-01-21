import React from 'react';

const steps = [
    { id: '01', title: 'Подбор конфигурации',
        text: 'Проектируем серверную конфигурацию под GONKA' +
            ' с учётом задач, бюджета и условий размещения.' +
            ' Подбираем GPU, CPU, охлаждение и сетевую архитектуру' +
            ' для стабильной работы без узких мест.' },
    { id: '02', title: 'Установка и настройка',
        text: 'Разворачиваем программное обеспечение, настраиваем' +
            ' ОС, драйверы, GNK-ноды и вспомогательные сервисы.' +
            ' Подготовка системы к стабильной круглосуточной работе.' },
    { id: '03', title: 'Подключение к сети GNK',
        text: 'Интегрируем оборудование в сеть GONKA,' +
            ' настраиваем соединение, ключи, доступы и взаимодействие с инфраструктурой сети.' },
    { id: '04', title: 'Оптимизация',
        text: 'Тонкая настройка параметров GPU, энергопотребления,' +
            ' охлаждения и софта для максимальной загрузки' +
            ' и эффективности без перегрева и простоев.' },
    { id: '05', title: 'Тестирование',
        text: 'Проводим проверку под реальной нагрузкой.' +
            ' Отслеживаем стабильность, производительность' +
            ' и корректность работы всех компонентов.' },
    { id: '06', title: 'Запуск с поддержкой',
        text: 'Запускаем систему в рабочий режим и обеспечиваем' +
            ' сопровождение. Контроль, консультации и помощь на этапе эксплуатации.' },
];

const WorkCycle = () => {
    return (
        <div className="bg-white rounded-3xl px-5 md:px-15 pt-5 pb-10 md:py-20 box-border">
            <div className="text-4xl md:text-5xl text-center md:text-left text-[#344499] mb-10">Полный цикл работ</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {steps.map(step => (
                    <div
                        key={step.id}
                        className="rounded-3xl border border-[#0A3F71] py-6 px-4 md:p-7 flex flex-col gap-5 md:gap-10"
                    >
                        <div className="text-3xl md:text-4xl text-[#0A3F71]">
                            {step.id}
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5">
                            <div className="text-xl">
                                <b>{step.title}</b>
                            </div>

                            <div className="text-base md:text-xl">
                                {step.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkCycle;