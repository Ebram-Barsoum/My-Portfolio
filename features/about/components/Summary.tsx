import { JSX } from "react";
import Image from "next/image";
import HelloWorld from "./HelloWorld";

import Column from "@/shared/ui/Column";
import Grid from "@/shared/ui/Grid";

export function Summary(): JSX.Element {
    return (
        <Grid
            as={'section'}
            className="slide-up bg-surface-container-lowest items-center gap-6 px-4 py-10 sm:py-20 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr] md:px-10 lg:px-30"
        >
            <Column className="rounded-xl border border-outline-variant">
                <Image
                    src={'/Developer Workspace.png'}
                    alt="Developer Workspace"
                    width={300}
                    height={300}
                    className="w-full max-h-50 object-cover rounded-t-xl"
                />

                <HelloWorld />
            </Column>

            <Column className="gap-4 order-0 sm:order-1">
                <h2 className="text-2xl font-bold font-mono text-inverse-surface md:text-4xl">
                    Front End
                    <span className="text-primary"> Developer</span>
                </h2>

                <p>
                    React & Next.js Software Engineer with 2 years of experience building scalable, production-grade web
                    applications including multi-vendor e-commerce platforms, trading systems, and real-time dashboards.
                    Strong expertise in modern Next.js features (Routing, Server Actions, Middleware, SSR/SSG/ISR) and
                    TypeScript. Passionate about clean architecture, performance optimization, and building maintainable
                    systems.
                </p>
            </Column>
        </Grid>
    )
}
