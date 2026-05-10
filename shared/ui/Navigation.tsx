"use client";

import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "../config/navigation";

interface NavigationProps {
    className?: string
}

export default function Navigation({ className = "" }: NavigationProps): JSX.Element {
    const pathname = usePathname();

    return (
        <nav
            className={`${className}`}
            aria-label="main navigation"
        >
            <ul
                role="list"
                className="w-full flex flex-col gap-6 sm:gap-4 sm:items-center sm:flex-row"
            >
                {navLinks.map(({ href, label }) => (
                    <li
                        key={href}
                        className={`pl-2 
                          ${pathname === href ? "font-bold  text-primary border-l-2 border-l-primary sm:border-l-0 sm:border-b-2 sm:border-b-primary" : ""}
                          sm:pb-1 sm:pl-0
                    `}>
                        <Link
                            href={href}
                            className="text-base transition-[scale_color] duration-200 hover:text-primary"
                        >{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
