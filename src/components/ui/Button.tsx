'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: 'white' | 'transparent' | 'custom';
    className?: string;
}

const buttonStyles = {
    white: `
    bg-white
    text-[#087672]
    border-[#BEDBDA]
    hover:bg-white/90
  `,
    transparent: `
    bg-white/17
    text-white
    border-[#E0DED8]
    backdrop-blur-sm
    hover:bg-white/25
  `,
};

const Button: React.FC<ButtonProps> = ({text, onClick, type = 'white', className}) => {
    return (
        <button className={clsx(
            'inline-flex items-center justify-center rounded-3xl border font-medium transition-colors duration-200',
            'px-7 py-4',
            className,
            buttonStyles[type]
        )} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;