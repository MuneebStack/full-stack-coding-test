import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className = '', children, ...props }) => {
    return (
        <button
            {...props}
            className={`inline-block bg-blue-600 hover:bg-blue-500 text-white dark:bg-white dark:hover:bg-white/50 dark:text-gray-500 dark:hover:text-white border rounded border-gray-300 border-solid px-6 pb-2 pt-2.5 font-medium capitalize leading-normal ${className}`}>
            {children}
        </button>
    );
};

export default PrimaryButton;
