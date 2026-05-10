import type { JSX } from "react";
import type { Metadata } from "next";

import { ProjectsList } from "@/features/projects";

import { projects } from "@/shared/data/projects";
import { CATEGOTY_PARAM, projectsFilterOptions } from "@/shared/config/projectsFilter";

import Column from "@/shared/ui/Column";
import AnimationWrapper from "@/shared/animation/AnimationWrapper";

export const metadata: Metadata = {
    title: "Projects",
};

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ [CATEGOTY_PARAM]: string }> }): Promise<JSX.Element> {

    const searchParamsResolved = await searchParams;
    const category = searchParamsResolved[CATEGOTY_PARAM as keyof typeof searchParamsResolved] || "All";

    const displayedProjects = category === "All" ? projects : projects.filter((project) => project.category === category);

    return (
        <AnimationWrapper
            animatedClass="slide-up"
            className="flex-1 flex flex-col gap-6 px-4 py-10 md:px-10 lg:px-30"
        >

            <Column className="gap-4 pb-6 border-b-2 border-b-outline-variant/30">
                <h1 className="slide-up font-semibold text-2xl text-primary">
                    {"//"} Active Projects
                </h1>
                <p className="slide-up">
                    I develop scalable, production-ready web applications with a strong focus on performance, architecture, and user experience. My projects include multi-vendor e-commerce platforms, supplier marketplaces, real-time dashboards, and responsive marketing websites built with modern technologies such as React.js, Next.js, TypeScript, Tailwind CSS, and Node.js. I specialize in building secure authentication systems, role-based dashboards, multilingual applications, SEO-optimized experiences, and real-time features using tools like Socket.io, Firebase Cloud Messaging, and TanStack Query. Across these projects, I emphasize clean architecture, maintainability, performance optimization, and intuitive UI/UX design to deliver reliable and engaging digital products.
                </p>
            </Column>

            <ProjectsList
                projects={displayedProjects}
                param={CATEGOTY_PARAM}
                filterOptions={projectsFilterOptions}
            />
        </AnimationWrapper>
    )
}
