import type { JSX } from 'react';
import type { Metadata } from "next";

import { Education, Experiences, Skills, Summary } from '@/features/about';
import { experiences } from '@/shared/data/experiences';
import { skills } from '@/shared/data/skills';

import AnimationWrapper from '@/shared/animation/AnimationWrapper';

export const metadata: Metadata = {
    title: "About",
    description: `
    I'm Ebram Barsoum, I'm a React & Next.js Software Engineer with 2 years of experience building scalable, production-grade web
                    applications including multi-vendor e-commerce platforms, trading systems, and real-time dashboards.
                    Strong expertise in modern Next.js features (Routing, Server Actions, Middleware, SSR/SSG/ISR) and
                    TypeScript. Passionate about clean architecture, performance optimization, and building maintainable
                    systems.
    `
};

export default function AboutPage(): JSX.Element {
    return (
        <AnimationWrapper
            className="flex-1"
            animatedClass='slide-up'
        >
            <Summary />
            <Skills skills={skills} />
            <Experiences experiences={experiences} />
            <Education />
        </AnimationWrapper>
    )
}
