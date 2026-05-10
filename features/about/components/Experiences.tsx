import type { JSX } from "react";

import { Experience } from "@/shared/types/experiences";
import { WorkExperienceCard } from "./WorkExperienceCard";

import Column from "@/shared/ui/Column";
import Heading from "@/shared/ui/Heading";

interface ExperiencesProps {
    experiences: Experience[]
}

export function Experiences({ experiences }: ExperiencesProps): JSX.Element {
    return (
        <Column
            as={'section'}
            className="gap-8 bg-surface-container-lowest px-4 py-10 sm:py-20 sm:px-10 lg:px-30"
        >
            <Heading level={2} className="slide-up"> Work Experience </Heading>

            {experiences.map(experience => <WorkExperienceCard
                key={experience.id} experience={experience} className="slide-up" />)}
        </Column>
    )
}
