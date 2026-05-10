"use client";

import type { JSX } from "react";
import toast from "react-hot-toast";
import { IoIosCopy } from "react-icons/io";

import { buttonsConfig } from "@/shared/config/buttons";
import Button from "@/shared/ui/Button";

import Column from "@/shared/ui/Column";
import Row from "@/shared/ui/Row";

export default function HelloWorld(): JSX.Element {
    const handleCopy = () => {
        navigator.clipboard.writeText(`console.log('Hi, Delighted to have  you here! 😍');`);
        toast.success("Code Copied to clipboard!");
    }

    return (
        <Column
            className="bg-surface-container-high gap-4 p-4 m-4 mb-0 rounded-lg boder border-outline-variant/50 translate-y-[-30%] sm:m-6 lg:p-8"
        >
            <Button
                variant="outline"
                config={buttonsConfig}
                label="copy code"
                title="copy code"
                className="self-end"
                onClick={handleCopy}
            >
                <IoIosCopy />
            </Button>

            <Row as={'p'} className="flex-wrap text-sm font-mono">
                <span className="text-primary">console</span>
                <span className="text-secondary">.log</span>
                (<span className="text-tertiary">&#39;Delighted to have you here!&#39; </span> );
            </Row>
        </Column>
    )
}
