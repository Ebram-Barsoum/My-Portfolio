import { ComponentType } from 'react';

export interface NavigationLink {
    href: string;
    label: string;
}

export interface SocialLink {
    href: string;
    label: string;
    icon?: ComponentType<{ className?: string }>;
}