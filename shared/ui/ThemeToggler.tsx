/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { JSX, useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useTheme } from "../providers/ThemeProvider";

export default function ThemeToggler(): JSX.Element {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;

    return (
        <button
            type="button"
            aria-label="theme toggler"
            title="theme toggler"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-2xl transition-transform active:scale-[.9] active:duration-75"
        >
            {theme === "dark" ? <MdOutlineLightMode />
                : <MdOutlineDarkMode />}
        </button>
    )
}
