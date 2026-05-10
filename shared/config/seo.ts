import { Metadata } from "next";

export const siteConfig = {
    name: "Ebram Barsoum",
    url: "https://ebram-barsoum.vercel.app",
    title: "Ebram Barsoum | Next.js & React.js Developer",
    description: "Frontend engineer specializing in Next.js, React.js, TypeScript, performance optimization, and scalable web architecture.",
};

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Ebram Barsoum",
        "Next.js developer",
        "React.js developer",
        "Front End Software Engineer",
        "App router",
        "Mid-level developer",
        "TypeScript developer",
        "JavaScript developer",
        "Front End developer Egypt",
        "Front End developer United Arab Emirates",
        "Front End developer Saudi Arabia",
    ],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
};

export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ebram Barsoum",
    url: "https://ebram-barsoum.vercel.app",
    jobTitle: "Frontend Developer",
    knowsAbout: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    sameAs: [
        "https://www.linkedin.com/in/ebram-barsoum-173964205/",
        "https://github.com/Ebram-Barsoum",
    ],
};