import { JSX } from "react";

import Column from "./Column";

type InputPropsBase = {
    label?: string;
    textarea?: boolean;
    className?: string;
    error?: string;
};

type InputProps =
    | (InputPropsBase & React.InputHTMLAttributes<HTMLInputElement> & { textarea?: false })
    | (InputPropsBase & React.TextareaHTMLAttributes<HTMLTextAreaElement> & { textarea: true });

export default function Input({ label, id, textarea = false, className = "", error = "", ...rest }: InputProps): JSX.Element {
    const classNames = `h-10 p-2 border-2 border-outline-variant/50 
    placeholder:text-on-surface-variant/50 placeholder:text-sm placeholder:font-[400]
    focus:outline-none ${className}`;

    return (
        <Column className="gap-1">
            {label && id && (
                <label
                    htmlFor={id}
                    className="font-mono text-sm font-semibold text-on-surface-variant"
                >
                    {label}
                </label>
            )}

            {textarea ? (
                <textarea
                    id={id}
                    {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    className={classNames}
                />
            ) : (
                <input
                    id={id}
                    {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
                    className={classNames}
                />
            )}

            {error && <p
                role="alert"
                className="font-mono text-xs text-error"
            >{error}</p>}
        </Column>
    );
}
