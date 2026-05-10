import { ElementType, ReactNode } from "react";

export interface UIElementProps {
    as?: ElementType;
    className?: string;
    id?: string;
    onClick?: () => void;
    onMouseLeave?: () => void;
    children?: ReactNode;
    label?: string;
    role?: string;
    ref?: unknown;
}