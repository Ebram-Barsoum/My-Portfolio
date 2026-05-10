import type { JSX } from "react";

import Row from "./Row";

import Navigation from "./Navigation";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import ResumeDownloader from "./ResumeDownloader";
import SideMenuToggler from "./SideMenuToggler";

export default function Header(): JSX.Element {
    return (
        <Row
            as={'header'}
            className="bg-surface sticky top-0 z-1 justify-between p-4 border-b border-b-outline-variant/30 md:px-10 lg:px-30"
        >
            <Logo />

            <Navigation className="hidden sm:flex" />

            <Row
                className="gap-4 [&>button:first-child]:hidden sm:[&>button:first-child]:flex"
            >
                <ResumeDownloader />

                <ThemeToggler />

                <SideMenuToggler />
            </Row>
        </Row>
    )
}
