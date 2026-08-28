import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button = ({ className, variant = 'primary', ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-accent text-white hover:bg-opacity-90',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };

  return (
    <button
      className={cn(
        'px-6 py-2 rounded-md font-medium transition-all duration-300 active:scale-95',
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
