"use client";

import type { JSX } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { buttonsConfig } from "@/shared/config/buttons";
import Button from "@/shared/ui/Button";

import Row from "@/shared/ui/Row";

interface ProjectsFilterProps {
    param: string;
    options: string[];
    className?: string
}

const activeClass = "bg-primary/10 border-primary/20 text-primary";

export default function ProjectsFilter({ param, options, className = "" }: ProjectsFilterProps): JSX.Element {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentValue = searchParams.get(param) || options[0];

    const handleFilter = (currentValue: string, value: string) => {
        if (currentValue === value) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set(param, value);
        router.push(`?${params.toString()}`);
    }

    return (
        <Row
            role="menu"
            label="projects-filter"
            className={`gap-4 font-mono overflow-x-auto ${className}`}
        >
            {
                options.map((option) => (
                    <Button
                        key={option}
                        variant="outline"
                        label="Filter option"
                        title={option}
                        config={buttonsConfig}
                        onClick={() => handleFilter(currentValue, option)}
                        className={`
                            transition-colors duration-200 px-2 py-1 whitespace-nowrap
                             ${currentValue === option ? activeClass : ""}
                             `}
                    >
                        {option}
                    </Button>
                ))
            }
        </Row>
    )
}
