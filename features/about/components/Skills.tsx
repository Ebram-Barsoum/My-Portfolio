import { JSX } from "react";

import { Skill } from "@/shared/types/skills";

import { SkillBadge } from "./SkillBadge";
import Heading from "@/shared/ui/Heading";

import Column from "@/shared/ui/Column";
import Row from "@/shared/ui/Row";

interface SkillsProps {
    skills: Skill[];
}

export function Skills({ skills }: SkillsProps): JSX.Element {
    return (
        <Column
            as={'section'}
            className="gap-8 bg-surface px-4 py-10 sm:py-20 sm:px-10 lg:px-30"
        >
            <Heading level={2} className="slide-up">Skills & Tools</Heading>

            <Row className="slide-up flex-wrap gap-4 mt-4">
                {skills.map((skill, index) => <SkillBadge skill={skill} key={index} />)}
            </Row>
        </Column>
    )
}
