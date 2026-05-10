import type { JSX } from "react";

import Row from "./Row";
import { socialLinks } from "../config/social";
import Social from "./Social";

export default function Footer(): JSX.Element {
    const year = new Date().getFullYear();

    return (
        <Row
            as='footer'
            className="bg-surface-container-lowest text-neutral justify-center gap-4 flex-wrap p-4 font-mono uppercase text-sm font-seibold border-t border-t-outline-variant/30 sm:justify-between md:px-10 lg:px-30">

            <p>
                &copy; {year} <span className="font-bold">ebram.dev</span>
            </p>

            <Social links={socialLinks} />
        </Row>
    )
}
