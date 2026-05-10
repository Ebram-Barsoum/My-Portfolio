import { JSX } from "react";
import BackToHome from "@/shared/ui/BackToHome";

import Column from "@/shared/ui/Column";
import Row from "@/shared/ui/Row";

export default function NotFoundPage(): JSX.Element {
    return (
        <Column className="flex-1 items-center gap-6 px-4 py-10 sm:py-20 md:px-10 lg:px-30">
            <h1 className="font-bold font-mono text-9xl">
                <span className="text-primary">4</span>
                <span className="text-secondary">0</span>
                <span className="text-tertiary">4</span>
            </h1>

            <Row className="justify-center flex-wrap font-mono font-semibold text-2xl">
                <span className="text-inverse-surface"> SYSTEM_ERROR:</span>
                <span className="text-error">ROUTE_NOT_FOUND</span>
            </Row>

            <p className="text-center text-on-surface-variant md:w-[50%] md:mx-auto">
                Error: 404 - Resource at this address is missing or has been deallocated from
                the primary memory stack. The requested URI does not map to any active
                controller.
            </p>

            <BackToHome />
        </Column>
    )
}
