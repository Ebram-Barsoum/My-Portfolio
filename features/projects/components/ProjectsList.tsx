import { JSX } from "react";

import { Project } from "@/shared/types/projects";
import ProjectCard from "./ProjectCard";
import ProjectsFilter from "./ProjectsFilter";

import Grid from "@/shared/ui/Grid";
import Column from "@/shared/ui/Column";

interface ProjectsListProps {
    projects: Project[];
    filterOptions: string[];
    param: string;
}

export function ProjectsList({ projects, filterOptions, param }: ProjectsListProps): JSX.Element {
    return (
        <Column className="gap-6 slide-up">
            <ProjectsFilter param={param} options={filterOptions} />

            <Grid className="gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        className="slide-up"
                    />
                ))}
            </Grid>
        </Column>
    )
}
