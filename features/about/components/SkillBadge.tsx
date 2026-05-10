import { Skill } from "@/shared/types/skills";
import { JSX } from "react";

interface SkillBadgeProps {
    skill: Skill
}

export function SkillBadge({ skill }: SkillBadgeProps): JSX.Element {
    return (
        <span
            className={`px-3 py-1 text-sm font-semibold font-mono
                 border-2 rounded-sm ${skill.className}
                 transition-all duration-300 hover:-translate-y-2! hover:scale-[1.05]!
                 `
            }
        >
            {skill.name}
        </span>
    )
}
