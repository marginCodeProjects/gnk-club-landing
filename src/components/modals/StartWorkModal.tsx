import ModalBase from './ModalBase'
import Button from '@/components/ui/Button'
import React from "react";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";

interface StartWorkModalProps {
    onNext: () => void;
    onClose: () => void;
}

const StartWorkModal: React.FC<StartWorkModalProps> = ({ onNext, onClose }) => {
    return (
        <ModalBase onClose={onClose}>
            <div className="text-4xl text-[#087672]">Начать работу</div>
            <div className="text-4xl text-[#087672]"><i>с нами</i></div>
            <div className="text-base my-5">
                Заполните форму для запуска GNK-инфраструктуры
            </div>

            <Input placeholder={'Ваше имя'}/>
            <Input placeholder={'Ваш телефон'}/>

            <Button
                text="Отправить заявку"
                onClick={onNext}
                className="w-full bg-[#087672] text-white"
                type="custom"
            />

            <Checkbox label={'Я соглашаюсь с условиями обработки персональных данных и принимаю политику конфиденциальности.'}/>
        </ModalBase>
    )
}

export default StartWorkModal
