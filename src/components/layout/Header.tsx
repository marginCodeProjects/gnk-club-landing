'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import {useModal} from "@/providers/ModalProvider";

export default function Header() {
    const {openStart} = useModal();

    return (
        <header className="relative top-0 left-0 w-full z-50 bg-transparent">
            <div className="mx-auto pt-3 md:pt-6 pb-6 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="GNK Club"
                            width={183}
                            height={32}
                            priority
                        />
                    </div>

                    <Button
                        text="Оставить заявку"
                        onClick={openStart}
                        type="white"
                    />
                </div>

                <div className="h-0 md:h-px w-full bg-white" />
            </div>
        </header>
    );
}
