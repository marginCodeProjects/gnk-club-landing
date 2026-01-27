import ModalBase from './ModalBase'
import Button from '@/components/ui/Button'
import React, {useState} from "react";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import {ContactData} from "@/types/application";

interface StartWorkModalProps {
    onNext: (data: ContactData) => void
    onClose: () => void;
}

const PHONE_REGEXP = /^\+?\d{7,15}$/

const StartWorkModal: React.FC<StartWorkModalProps> = ({ onNext, onClose }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [touched, setTouched] = useState(false)
    const [agreed, setAgreed] = useState(false)

    const isPhoneValid = PHONE_REGEXP.test(phone)
    const canSubmit = name.trim().length > 0 && isPhoneValid && agreed

    return (
        <ModalBase onClose={onClose}>
            <div className="text-4xl text-[#087672]">Начать работу</div>
            <div className="text-4xl text-[#087672]"><i>с нами</i></div>
            <div className="text-base my-5">
                Заполните форму для запуска GNK-инфраструктуры
            </div>

            <Input placeholder={'Ваше имя'}
                   value={name}
                   onChange={e => {
                       setName(e.target.value)
                   }}
            />
            <Input placeholder={'Ваш телефон'}
                   value={phone}
                   onChange={e => {
                       setPhone(e.target.value)
                       setTouched(true)
                   }}
            />

            {touched && !isPhoneValid && (
                <div className="text-red-500 text-sm">
                    Введите корректный номер телефона
                </div>
            )}

            <Button
                text="Отправить заявку"
                onClick={() => {
                    if (canSubmit) onNext({name, phone})
                }}
                className="w-full bg-[#087672] text-white"
                type="custom"
            />

            {!agreed && touched && (
                <div className="text-red-500 text-sm mt-1">
                    Необходимо согласие на обработку данных
                </div>
            )}

            <Checkbox
                label={'Я соглашаюсь с условиями обработки персональных данных и принимаю политику конфиденциальности.'}
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
            />
        </ModalBase>
    )
}

export default StartWorkModal
