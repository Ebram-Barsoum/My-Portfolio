import { Project } from "../types/projects";

export const projects: Project[] = [
    {
        id: crypto.randomUUID(),
        title: "Multi-supplier trading platform",
        image: "/kemetra.png",
        description: `
                    Engineered a multi-supplier trading platform with role-based dashboards for administrators and suppliers using Next.js. \n
                    Leveraged Server Actions for secure mutations and automatic data revalidation. \n
                    Implemented refresh token–based authentication and enforced role-based access control using Next.js Middleware.\n
                    Developed a centralized global error handling system to standardize API responses and improve application stability.
                    `,
        stack: ['Next.js', 'Middleware', 'Server Actions', 'React.js', 'Next-Intl', 'Socket.io', 'Tailwincss', 'Tanstack-Query', 'TypeScript', 'React-hook-form', 'Axios'],
        previewLink: 'https://kemetera.com/',
        category: 'E-commerce',
    },
    {
        id: crypto.randomUUID(),
        title: "Multi-vendor Pets e-commerce platform",
        image: "/alief.png",
        description: `
                    Developed a multi-language, multi-vendor pet e-commerce platform featuring a built-in social forum and dedicated dashboards for admins and vendors. \n
                    Implemented SSG, SSR, and ISR to optimize performance and SEO. \n
                    Integrated authentication with NextAuth, internationalization with next-intl, and real-time communication via Socket.io.\n
                    Enabled browser push notifications using Firebase Cloud Messaging and Service Workers. \n
                    Improved large dataset rendering performance using TanStack Virtual and SWR for efficient data fetching.
                    `,
        stack: ['Next.js', 'Middleware', 'Server Actions', 'Next-Auth', 'Service-Worker', 'React.js', 'Next-Intl', 'Socket.io', 'Tailwincss', 'SWR', 'TypeScript', 'Tanstack-Virtual', 'React-hook-form', 'Axios'],
        category: 'E-commerce',
    },
    {
        id: crypto.randomUUID(),
        title: "Multi-Role Tranzita Dashboard",
        image: "/tranzita-dashboard.png",
        description: `
                    Built a multi-role dashboard for the Tranzita application using React.js, TypeScript, Tailwind CSS, and TanStack Query. \n
                    Implemented role-based access control and refresh token-based authentication. \n
                    Integrated Socket.io for real-time support chat and Recharts for interactive analytics visualizations.
                    `,
        stack: ['React.js', 'TypeScript', 'Socket.io', 'Tailwincss', 'Tanstack-Query', 'React-hook-form', 'Recharts', 'Axios'],
        category: 'Dashboard',
    },
    {
        id: crypto.randomUUID(),
        title: "Multi-Language Tranzita Landing Page",
        image: "/tranzita-landingpage.png",
        description: `Developed a fully responsive, multi-language landing page for the Tranzita app, improving SEO and marketing conversion rates.\n
                      Integrated MailJS for efficient contact form functionality.\n
        `,
        stack: ['HTML', 'CSS', 'Tailwindcss', 'Javascript', 'MailJS'],
        previewLink: 'https://tranzita.app/',
        category: 'Landing Page',
    }
];
