import type { JSX } from "react";

import Column from "@/shared/ui/Column";
import Row from "@/shared/ui/Row";
import { LuGraduationCap } from "react-icons/lu";

export default function EducationCard(): JSX.Element {
    return (
        <Column
            as={'article'}
            className="slide-up gap-2 p-4 bg-surface-container-lowest rounded-lg border-2 border-outline-variant/30"
        >
            <Row className="gap-4">
                <LuGraduationCap className="text-primary w-8 h-8" />

                <Column>
                    <Row as={'h3'} className="text-lg font-bold text-inverse-surface">
                        B.S in Computer Science
                    </Row>

                    <Row as={'p'} className="text-sm text-secondary font-mono font-bold">
                        Assiut University
                    </Row>
                </Column>
            </Row>

            <Row as={'p'}>
                Specialized in Software Engineering, graduated with an accumulated GPA of 3.75 out of 4 (Excellent with Honors),
                Ranked #2 of my department in the faculty of computers and information.
            </Row>

            <Row as={'p'} className="mt-2 text-sm text-on-surface-variant font-mono">
                2019 - 2023
            </Row>
        </Column>
    )
}
