import React, { useState, useRef, useEffect } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    placeholder: string;
    onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, placeholder, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: Option) => {
        setSelectedValue(option.label);
        setIsOpen(false);
        if (onChange) onChange(option.value);
    };

    return (
        <div className="relative w-full mb-5" ref={selectRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  w-full border border-[#BEDBDA] rounded-3xl p-3 cursor-pointer
                  font-[var(--font-ag-palatial)] flex justify-between items-center
                  transition-all duration-200
                  ${!selectedValue ? 'text-[#BEDBDA] italic font-accent' : 'text-black'}
                  bg-white
                `}
            >
                <span>{selectedValue || placeholder}</span>

                <svg
                    className={`w-4 h-4 transition-transform text-[##087672] ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-[#BEDBDA] rounded-2xl overflow-hidden shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className="p-3 hover:bg-[#F0F9F9] cursor-pointer font-[var(--font-accent)] text-sm transition-colors"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
