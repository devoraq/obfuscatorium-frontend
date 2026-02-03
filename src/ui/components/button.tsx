import Link from "next/link";
import { ReactNode, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "small" | "medium" | "large" | "xl";

interface CommonButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

interface ButtonProps extends CommonButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface LinkButtonProps extends CommonButtonProps {
  to: string;
  type?: never;
  disabled?: never;
}

export const Button = (
  props: ButtonProps | LinkButtonProps,
): React.ReactElement => {
  const {
    children,
    to,
    onClick,
    variant = "primary",
    size = "medium",
    className = "",
    disabled = false,
    type = "button",
  } = props as ButtonProps & Partial<LinkButtonProps>;

  const baseStyles =
    "font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-sky-700 hover:bg-sky-600 shadow-2xl shadow-sky-700/50 text-white",
    secondary: "border-2 border-sky-600 hover:bg-sky-600/10 text-white",
    ghost: "text-gray-300 hover:text-white",
  };

  const sizes: Record<ButtonSize, string> = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
    xl: "px-10 py-4 text-lg",
  };

  const classes =
    `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`.trim();

  if (to) {
    return (
      <Link href={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};
