"use client";

import { JSX } from "react";
import { IoMdClose } from "react-icons/io";

import Logo from "./Logo";
import Button from "./Button";
import { buttonsConfig } from "../config/buttons";
import ResumeDownloader from "./ResumeDownloader";

import Row from "./Row";
import Column from "./Column";
import Navigation from "./Navigation";
import Social from "./Social";
import { socialLinks } from "../config/social";

interface SideMenuProps {
    onClose: () => void;
    isOpen: boolean;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps): JSX.Element {
    return (
        <Column
            as={'aside'}
            className={`
                   h-dvh w-dvw bg-surface/95 z-10 fixed top-0 left-0 
                   transition-transform duration-300 ease-in-out
                   ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
        >

            <Row className="justify-between p-4 border-b border-b-outline-variant/30">
                <Logo />

                <Button
                    variant="outline"
                    config={buttonsConfig}
                    onClick={onClose}
                    label="side-menu-toggler"
                    title="side-menu-toggler"
                    className="text-2xl p-1 rounded-sm"
                >
                    <IoMdClose />
                </Button>
            </Row>

            <Navigation className="flex-1 p-4 border-b border-b-outline-variant/30" />

            <ResumeDownloader className="flex items-center justify-center m-4" />

            <Social
                links={socialLinks}
                variant="icon"
                className="mb-4 text-2xl flex items-center justify-center"
            />
        </Column>
    )
}
