import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

import { SkillBadge } from "@/features/about";
import { Project } from "@/shared/types/projects";

import Column from "@/shared/ui/Column";
import Row from "@/shared/ui/Row";

interface ProjectCardProps {
    project: Project;
    className?: string
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps): JSX.Element {
    return (
        <Column
            as={'article'}
            className={`slide-up bg-surface-container-lowest shadow-sm border-2 border-outline-variant/30 rounded-t-2xl ${className}`}
        >
            <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="w-full object-fill rounded-t-xl border-b-2 border-b-outline-variant/30"
            />

            <Column className="gap-2 py-4 px-6">
                <h2 className="text-xl font-semibold text-primary">{project.title}</h2>

                <Column as={'ul'} className="gap-1">
                    {project.description.split('\n').map((item, index) => (
                        <li key={index} className="text-sm text-on-surface-variant">
                            {item}
                        </li>
                    ))}
                </Column>

                <Row
                    as={'ul'}
                    className="flex-wrap gap-2 not-last:pb-4 not-last:border-b-2 not-last:border-b-outline-variant/30"
                >
                    {project.stack.map((item, index) => (
                        <li key={index}>
                            <SkillBadge
                                skill={{ name: item, className: 'text-xs border-1! border-outline-variant' }}
                            />
                        </li>
                    ))}
                </Row>

                {

                    project.previewLink && <Link
                        href={project.previewLink}
                        target="_blank"
                        className="mt-2 flex items-center justify-center gap-2 py-2 rounded-sm text-sm w-full bg-primary text-on-primary">
                        <LiaExternalLinkAltSolid size={18} />
                        Live Preview
                    </Link>

                }
            </Column>
        </Column>
    )
}
