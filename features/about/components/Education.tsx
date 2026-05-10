import type { JSX } from "react";

import Column from "@/shared/ui/Column";
import EducationCard from "./EducationCard";
import Heading from "@/shared/ui/Heading";

export function Education(): JSX.Element {
    return (
        <Column
            as={'section'}
            className="gap-8 bg-surface px-4 py-10 sm:py-20 sm:px-10 lg:px-30"
        >
            <Heading level={2} className="slide-up">Education </Heading>

            <EducationCard />
        </Column>
    )
}
