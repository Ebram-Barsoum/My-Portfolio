import Column from "@/shared/ui/Column";
import Row from "@/shared/ui/Row";
import type { JSX } from "react";

export function CoreStack(): JSX.Element {
    return <Column className="gap-4">
        <h3 className="slide-up uppercase font-mono font-semibold text-2xl!">Core Stack</h3>
        <Row className="slide-up gap-6">
            <img
                src="https://skillicons.dev/icons?i=nextjs,react,typescript,javascript,tailwind,reactquery"
                alt="Core Stack"
                className="flex items-center gap-4"
                loading="lazy"
            />
        </Row>
    </Column>
}
