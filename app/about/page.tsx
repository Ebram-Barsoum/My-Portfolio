import type { JSX } from 'react';
import type { Metadata } from "next";

import { Education, Experiences, Skills, Summary } from '@/features/about';
import { experiences } from '@/shared/data/experiences';
import { skills } from '@/shared/data/skills';

import AnimationWrapper from '@/shared/animation/AnimationWrapper';

export const metadata: Metadata = {
    title: "About",
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
