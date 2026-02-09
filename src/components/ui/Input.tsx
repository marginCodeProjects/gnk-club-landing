import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({placeholder, onChange, value}) => {
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
                placeholder-accent
            "
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};

export default Input;