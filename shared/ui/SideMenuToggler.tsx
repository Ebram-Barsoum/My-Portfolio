/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { JSX, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RiMenuFill } from "react-icons/ri";

import Button from "./Button";
import { buttonsConfig } from "../config/buttons";
import SideMenu from "./SideMenu";

export default function SideMenuToggler(): JSX.Element {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div className="relative sm:hidden">
            <Button
                variant="outline"
                config={buttonsConfig}
                onClick={() => setIsOpen(true)}
                label="side-menu-toggler"
                title="side-menu-toggler"
                className="text-2xl p-1 rounded-sm"
            >
                <RiMenuFill />
            </Button>

            <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}
