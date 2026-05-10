import type { JSX } from "react";
import Link from "next/link";

import { Experience } from "@/shared/types/experiences";

import Column from "@/shared/ui/Column";
import Row from "@/shared/ui/Row";

interface WorkExperienceCardProps {
    experience: Experience;
    className?: string;
}

export function WorkExperienceCard({ experience, className = "" }: WorkExperienceCardProps): JSX.Element {
    return (
        <Column
            as={'article'}
            className={`gap-2 rounded-lg border-2 border-outline-variant/30 p-4 bg-surface lg:ms-10 ${className}`}
        >
            <Row className="justify-between gap-2">
                <h3
                    className="text-lg font-bold text-inverse-surface"
                >
                    {experience.title}
                </h3>

                <p className="text-xs text-on-surface-variant font-mono sm:tex-sm">
                    {experience.startDate} - {experience.endDate ?? "Present"}
                </p>
            </Row>

            <Link
                href={experience.companySite}
                target="_blank"
                className="w-fit font-mono text-secondary text-xs font-semibold"
            >
                {experience.company} - ({experience.location})
            </Link>

            <p className="text-on-surface-variant mt-2">
                {experience.description}
            </p>
        </Column>
    )
}
