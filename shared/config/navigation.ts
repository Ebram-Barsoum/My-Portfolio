import { NavigationLink } from "../types/links";

export const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/projects",
        label: "Projects"
    },
    {
        href: "/contact",
        label: "Contact"
    }
] as const satisfies NavigationLink[];