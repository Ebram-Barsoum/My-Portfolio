"use client";

import { ButtonHTMLAttributes, JSX, ReactNode } from "react";
import { ButtonVariant } from "../types/buttons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    config: Record<ButtonVariant, string>;
    onClick?: () => void;
    children: ReactNode;
    label: string;
    title: string;
    className?: string;
}

export default function Button({ variant, config, onClick, children, label, title, className = "", type = "button", ...rest }: ButtonProps): JSX.Element {
    return (
        <button
            type={type}
            aria-label={label}
            title={title}
            onClick={() => onClick?.()}
            className={`flex items-center gap-2 transition-transform active:scale-[.95] active:duration-75 ${className} ${config[variant]}`}
            {...rest}
        >
            {children}
        </button>
    )
}
