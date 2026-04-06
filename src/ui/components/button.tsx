import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  text: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  icon: Icon,
  className,
  onClick,
  type = 'button',
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-600 py-2.5 text-xs font-bold text-white hover:bg-sky-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  >
    {Icon && <Icon size={16} />}
    {text}
  </button>
);
