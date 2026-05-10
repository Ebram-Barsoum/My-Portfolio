"use client";

import { useRef, type JSX, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationWrapperProps {
    children: ReactNode;
    animatedClass: string;
    className?: string;
}

export default function AnimationWrapper({ children, animatedClass, className = "" }: AnimationWrapperProps): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const cards = ref.current?.querySelectorAll(`.${animatedClass}`)

        cards?.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 50,
                duration: .8,
                ease: 'power2.out',
            })
        })
    }, { scope: ref });

    return (
        <div ref={ref} className={`${className}`}>
            {children}
        </div>
    )
}
