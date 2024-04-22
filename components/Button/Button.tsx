// Button.tsx

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-block px-4 py-2 text-white rounded-sm shadow-md focus:outline-none focus:ring focus:ring-rose-400 focus:ring-opacity-50 ${className}`}
    >
    
      {children}
    </button>
  );
};

export default Button;
