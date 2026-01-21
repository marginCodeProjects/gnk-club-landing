import React from 'react';

interface InputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({placeholder}) => {
    return (
        <input
            className="
                w-full
                border
                border-[#BEDBDA]
                rounded-3xl
                font-[var(--font-ag-palatial)]
                p-3
                mb-5
                placeholder:text-[#BEDBDA]
                placeholder:italic
            "
            placeholder={placeholder}
        />
    );
};

export default Input;