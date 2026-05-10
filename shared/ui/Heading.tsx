import type { JSX, ReactNode } from "react";

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
}

const levelMapper: Record<HeadingProps["level"], keyof JSX.IntrinsicElements> = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
}

export default function Heading({ level, children, className = "", ...props }: HeadingProps): JSX.Element {
    const H: keyof JSX.IntrinsicElements = levelMapper[level];

    return (
        <H
            className={`gap-4 text-2xl font-mono font-bold text-primary ps-4 border-l-2 border-l-primary ${className}`}
            {...props}
        >
            {children}
        </H>
    )
}
