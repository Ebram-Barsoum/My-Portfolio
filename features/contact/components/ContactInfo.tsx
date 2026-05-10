import type { JSX } from "react";

import Column from "@/shared/ui/Column";
import AvailabilityStatus from "./AvailabilityStatus";

export function ContactInfo(): JSX.Element {
    return (
        <Column className="gap-6">
            <h1 className="slide-up text-2xl text-inverse-surface font-bold" >Initialize Connection</h1>

            <p className="slide-up text-on-surface-variant">
                Currently accepting new engineering challenges. Whether
                you have a project in mind or just want to discuss the finer
                points of React rendering, let&#39;s connect.
            </p>

            <AvailabilityStatus />
        </Column>
    )
}
