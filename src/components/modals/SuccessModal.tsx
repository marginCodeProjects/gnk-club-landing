import ModalBase from './ModalBase'
import Button from '@/components/ui/Button'
import React from "react";

interface SuccessModalProps {
    onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
    return (
        <ModalBase onClose={onClose}>
            <div className="text-4xl text-[#087672]">Ваша заявка</div>
            <div className="text-4xl text-[#087672] mb-5"><i>успешно принята, спасибо!</i></div>
            <div className="mb-10 text-base">Ожидайте звонка нашего менеджера в ближайшее время, для выяснения условий!</div>
            <Button
                text="Вернуться назад"
                onClick={onClose}
                className="w-full bg-[#087672] text-white"
                type="custom"
            />
        </ModalBase>
    )
}

export default SuccessModal
