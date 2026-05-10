import { JSX } from "react";
import Link from "next/link";

import { SocialLink } from "../types/links";

import Row from "./Row";

interface SocialProps {
    links: SocialLink[];
    variant?: "icon" | "label";
    className?: string;
}

export default function Social({ links, variant = "label", className = "" }: SocialProps): JSX.Element {
    return (
        <nav
            aria-label="Social links"
            className={`${className}`}
        >
            <Row
                as={'ul'}
                className="gap-2 sm:gap-4"
            >
                {
                    links.map(({ href, label, icon: Icon }) => {
                        return <li key={href} className="inline-block px-2">
                            <Link
                                href={href}
                                className="text-sm hover:text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {
                                    (variant === "icon" && Icon) ?
                                        <Icon className="text-xl" /> :
                                        label
                                }
                            </Link>
                        </li>
                    })
                }
            </Row>
        </nav>
    )
}
