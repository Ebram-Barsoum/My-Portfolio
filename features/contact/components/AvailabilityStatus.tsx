import type { JSX } from "react";
import { IoCodeSlashOutline, IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

import Column from "@/shared/ui/Column";
import Row from "@/shared/ui/Row";

const iconStyle = "text-primary shrink-0";
const jobCriterias = [
    {
        icon: <SlLocationPin className={iconStyle} size={24} />,
        title: "Remote - Onsite - Hybrid",
    },
    {
        icon: <IoTimeOutline className={iconStyle} size={24} />,
        title: "Part time - Full time - Freelancer",
    },
    {
        icon: <IoCodeSlashOutline className={iconStyle} size={24} />,
        title: "React.js & Next.js Developer - Front End Instructor",
    }
]

export default function AvailabilityStatus(): JSX.Element {
    return (
        <Column className="slide-up mt-4 gap-4 p-6 bg-surface-container-low rounded-md border-2 border-outline-variant/30 font-mono" >

            <Row className="ps-2 gap-4 text-secondary font-mono uppercase">
                <span className="h-2 w-2 bg-secondary rounded-full" />
                status: Available
            </Row>

            {
                jobCriterias.map((criteria, index) => (
                    <Row key={index} className="gap-2 items-start! sm:items-center">
                        {criteria.icon}
                        <span>
                            {criteria.title}
                        </span>
                    </Row>
                ))
            }
        </Column>
    )
}
