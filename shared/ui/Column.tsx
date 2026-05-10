import { JSX } from "react";
import { UIElementProps } from "../types/ui";

export default function Column({ className, id, label, role, ref, onClick, children, as: Component = "div" }: UIElementProps): JSX.Element {
    return (
        <Component
            className={`flex flex-col ${className}`}
            id={id}
            role={role}
            ref={ref}
            onClick={onClick}
            aria-label={label}>
            {children}
        </Component>
    )
}