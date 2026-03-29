import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  text: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon: Icon,
  className,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex-1 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold 
                 rounded-xl active:scale-95 flex items-center justify-center gap-2 
                 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {Icon && <Icon size={16} />}
      {text}
    </button>
  );
};

export default Button;
