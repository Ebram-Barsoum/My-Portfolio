export type ProjectCategory = "All" | "Dashboard" | "E-commerce" | "Landing Page";
export interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    stack: string[];
    previewLink?: string;
    category: ProjectCategory;
}