import ModalBase from './ModalBase'
import Button from '@/components/ui/Button'
import React, {useEffect, useState} from "react";
import Select from "@/components/ui/Select";
import Image from "next/image";

interface CalculatorModalProps {
    onNext: () => void;
    onClose: () => void;
}

const options = [
    { value: '1', label: '1 мес' },
    { value: '2', label: '2 мес' },
    { value: '3', label: '3 мес' },
];

const amount = [8, 16, 24, 32];

const base_sum: Record<string, number> = {
    hour: 14.4,
    day: 346,
    month: 10368,
}

const CalculatorModal: React.FC<CalculatorModalProps> = ({ onNext, onClose }) => {
    const [selected, setSelected] = useState(amount[0]);
    const multiplier = selected / amount[0];
    const [months, setMonths] = useState<number>(1);
    const totalSum = multiplier * base_sum.month * months

    const configurationState = React.useMemo(() => {
        return [
            `${selected}x NVIDIA H100 GPU`,
            'Фиксированная цена: $1.8/час за 1 GPU',
            'Запуск от 1 дня',
            'Техническая поддержка включена',
        ]
    }, [selected])

    return (
        <ModalBase onClose={onClose}>
            <div className="text-4xl text-[#087672]">Калькулятор</div>
            <div className="text-4xl text-[#087672]"><i>конфигурации</i></div>
            <div className="text-base my-5">Рассчитайте стоимость мощности для вашей конфигурации</div>
            <div className="flex gap-3 mt-10 mb-5">
                {amount.map(v => (
                    <button
                        key={v}
                        className={
                            `w-24 h-24 rounded-full
                             border-2 border-[#BEDBDA] hover:bg-[#BEDBDA2B]
                             cursor-pointer ${v === selected && 'bg-[#BEDBDA2B]'}`
                        }
                        onClick={() => setSelected(v)}
                    >
                        <b className="text-lg md:text-xl"><i>{v}</i></b>
                    </button>
                ))}
            </div>

            <div>
                <div className="text-base mb-5">Выберите срок аренды видеокарт</div>
                <Select
                    placeholder="Выберите категорию..."
                    options={options}
                    onChange={(val) => setMonths(Number(val))}
                />
            </div>

            <div className="grid md:grid-cols-3 gap-3 mb-3">
                <div className="border border-[#BEDBDA] rounded-3xl p-5 text-center">
                    <div className="text-lg text-[#087672]">В час</div>
                    <b className="text-3xl"><i>
                        {multiplier * base_sum['hour']} $
                    </i></b>
                </div>
                <div className="border border-[#BEDBDA] rounded-3xl p-5 text-center">
                    <div className="text-lg text-[#087672]">В день</div>
                    <b className="text-3xl"><i>
                        {multiplier * base_sum['day']} $
                    </i></b>
                </div>
                <div className="border border-[#BEDBDA] rounded-3xl p-5 text-center">
                    <div className="text-lg text-[#087672]">В месяц</div>
                    <b className="text-3xl"><i>
                        {multiplier * base_sum['month']} $
                    </i></b>
                </div>
            </div>
            <div className="border border-[#BEDBDA] rounded-3xl p-5 text-center mb-6">
                <div className="text-lg text-[#087672]">Итого</div>
                <b className="text-3xl"><i>
                    {totalSum} $
                </i></b>
            </div>

            <div className="flex flex-col gap-5 mb-5">
                <div className="text-base">Ваша конфигурация</div>
                {configurationState.map(adv =>
                    <div key={adv} className="flex gap-3 md:gap-5 items-center">
                        <Image
                            src={'/plus-green.svg'}
                            alt={'plus'}
                            width={31}
                            height={31}
                        />
                        <div className="text-base md:text-xl">{adv}</div>
                    </div>
                )}
            </div>

            <Button
                text="Оставить заявку"
                onClick={onNext}
                className="w-full bg-[#087672] text-white"
                type='custom'
            />
        </ModalBase>
    )
}

export default CalculatorModal
