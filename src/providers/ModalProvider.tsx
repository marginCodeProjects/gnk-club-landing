'use client'

import React, { createContext, useContext, useState } from 'react'
import CalculatorModal from '@/components/modals/CalculatorModal'
import StartWorkModal from '@/components/modals/StartWorkModal'
import SuccessModal from '@/components/modals/SuccessModal'

type ModalType = 'calculator' | 'start' | 'success' | null

type ModalContextType = {
    openCalculator: () => void
    openStart: () => void
    openSuccess: () => void
    close: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modal, setModal] = useState<ModalType>(null)

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
                    onNext={value.openStart}
                    onClose={value.close}
                />
            )}

            {modal === 'start' && (
                <StartWorkModal
                    onNext={value.openSuccess}
                    onClose={value.close}
                />
            )}

            {modal === 'success' && (
                <SuccessModal onClose={value.close} />
            )}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('useModal must be used inside ModalProvider')
    }
    return context
}
