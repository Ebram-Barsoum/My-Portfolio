"use client";

import type { JSX } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import Column from "@/shared/ui/Column";
import Grid from "@/shared/ui/Grid";
import { CoreStack } from "./CoreStack";

export function Brief(): JSX.Element {
    return (
        <Grid className="slide-up p-4 bg-surface-container-lowe items-center justify-center gap-6
         font-mono font-bold 
         sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr] "
        >
            <Column className="gap-4 order-1 text-2xl sm:gap-8 sm:order-0 lg:text-4xl">
                <h1 className="text-primary italic">Hello, There! 👋</h1>
                <h2>
                    <span className="text-secondary"> I&apos;m Ebram Barsoum, </span>
                    <TypeAnimation
                        sequence={[
                            "and I'm a React.js & Next.js Software Engineer with 2 years of experience.",
                            1500
                        ]}
                        speed={50}
                        wrapper="p"
                        cursor={false}
                        className="text-primary italic"
                    />
                </h2>

                <CoreStack />
            </Column>

            <Image
                src="/abram.jpg"
                alt="Ebram Barsoum"
                width={400}
                height={400}
                className="mx-auto fancy-radius border-4 border-outline-variant/30"
                loading="eager"
            />
        </Grid>
    );
}
