import { JSX } from "react";
import type { Metadata } from "next";

import { ContactForm, ContactInfo } from "@/features/contact";

import Grid from "@/shared/ui/Grid";
import AnimationWrapper from "@/shared/animation/AnimationWrapper";

export const metadata: Metadata = {
    title: "Contact",
};

export default function ContactPage(): JSX.Element {
    return (
        <AnimationWrapper
            animatedClass="slide-up"
            className="flex-1 px-4 py-10 sm:py-20 md:px-10 lg:px-30"
        >
            <Grid className="gap-6 items-center md:gap-8 md:grid-cols-2">
                <ContactInfo />
                <ContactForm />
            </Grid>
        </AnimationWrapper>
    )
}
