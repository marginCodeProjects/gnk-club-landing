'use client'

import React, { useEffect } from 'react'

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

const ModalBase: React.FC<ModalProps> = ({ children, onClose }) => {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* modal */}
            <div className="relative z-10 flex max-h-2/3 items-center justify-center p-4">
                <div
                    className="bg-white rounded-3xl w-full max-w-xs md:max-w-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <div className="max-h-[80vh] overflow-y-auto p-7">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBase
