
"use client";

import type { JSX, ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme,
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";

        const savedTheme = window.localStorage.getItem("theme") as Theme | null;

        const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

        return savedTheme ?? systemTheme;
    });

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}
