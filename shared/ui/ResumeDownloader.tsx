"use client";

import type { JSX } from 'react';
import { BsCloudDownload } from 'react-icons/bs';

import Button from './Button';
import { buttonsConfig } from '../config/buttons';

interface ResumeDownloaderProps {
    className?: string
}

export default function ResumeDownloader({ className = "" }: ResumeDownloaderProps): JSX.Element {
    const handleResumeDownload = () => {
        const resumeURL = 'Ebram Barsoum - Front End (React.js & Next.js) developer.pdf';
        const link = document.createElement('a');
        link.href = resumeURL;
        link.download = 'Ebram Barsoum - Front End (React.js & Next.js) developer.pdf';
        link.click();
    }

    return (
        <Button
            variant="primary"
            config={buttonsConfig}
            onClick={handleResumeDownload}
            label="resume-downloader"
            title="resume-downloader"
            className={`font-mono px-2 py-1 rounded-sm text-sm ${className}`}
        >
            <BsCloudDownload />
            Resume
        </Button>
    )
}
