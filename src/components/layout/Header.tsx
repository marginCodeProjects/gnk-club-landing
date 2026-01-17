'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Header() {
    return (
        <header className="relative top-0 left-0 w-full z-50 bg-transparent">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
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
                        onClick={() => {}}
                        type="white"
                    />
                </div>

                <div className="h-px w-full bg-white" />
            </div>
        </header>
    );
}
