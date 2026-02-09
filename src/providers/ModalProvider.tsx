'use client'

import React, { createContext, useContext, useState } from 'react'
import CalculatorModal from '@/components/modals/CalculatorModal'
import StartWorkModal from '@/components/modals/StartWorkModal'
import SuccessModal from '@/components/modals/SuccessModal'
import {CalculatorData, ContactData} from "@/types/application";
import {sendApplication} from "@/app/actions/sendApplication";

type ModalType = 'calculator' | 'start' | 'success' | null

type ModalContextType = {
    openCalculator: () => void
    openStart: () => void
    openSuccess: () => void
    close: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modal, setModal] = useState<ModalType>(null);
    const [calculatorData, setCalculatorData] = useState<CalculatorData | null>(null)
    const [contactData, setContactData] = useState<ContactData | null>(null)

    const value = {
        openCalculator: () => setModal('calculator'),
        openStart: () => setModal('start'),
        openSuccess: () => setModal('success'),
        close: () => setModal(null),
    }

    return (
        <ModalContext.Provider value={value}>
            {children}

            {modal === 'calculator' && (
                <CalculatorModal
                    onNext={(data) => {
                        setCalculatorData(data)
                        value.openStart()
                    }}
                    onClose={() => {
                        setCalculatorData(null)
                        value.close()
                    }}
                />
            )}

            {modal === 'start' && (
                <StartWorkModal
                    onNext={async (contact) => {
                        setContactData(contact)

                        await submitApplication({
                            contact,
                            calculator: calculatorData ?? undefined,
                        })

                        value.openSuccess()
                    }}
                    onClose={value.close}
                />
            )}

            {modal === 'success' && (
                <SuccessModal onClose={() => {
                    value.close();
                    setCalculatorData(null)
                    setContactData(null)
                }} />
            )}
        </ModalContext.Provider>
    )
}

async function submitApplication(data: { contact: ContactData; calculator?: CalculatorData }) {
    const res = await fetch("/api/sendApplication", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!result.ok) {
        console.error("Ошибка отправки заявки", result.error);
    }
}


export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('useModal must be used inside ModalProvider')
    }
    return context
}
