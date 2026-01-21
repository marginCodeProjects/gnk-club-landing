import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
    return (
        <div className="flex items-center gap-2 cursor-pointer select-none mt-5">
            <div className="relative flex items-center">
                <input
                    type="checkbox"
                    className={`
                        peer h-5 w-5 cursor-pointer appearance-none rounded border 
                        border-slate-300 bg-white transition-all 
                        checked:border-blue-600 checked:bg-blue-600
                        hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200
                        disabled:cursor-not-allowed disabled:bg-slate-100
                        ${className}
                    `}
                    {...props}
                />
                {/* Иконка галочки, которая появляется при состоянии :checked */}
                <svg
                    className="absolute h-3.5 w-3.5 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    xmlns="http://www.w3.org"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <label
                className="cursor-pointer text-sm md:text-base peer-disabled:opacity-50"
            >
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
