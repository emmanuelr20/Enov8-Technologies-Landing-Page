"use client"

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const ScrollReveal = dynamic(
    () => import('scrollreveal'),
    { ssr: false }
)

export default function Action() {
    const titleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = require('scrollreveal').default;

            const revealOptions = {
                origin: 'left',
                distance: '70px',
                duration: 800,
                easing: 'ease-in',
                delay: 200,
                reset: false
            }

            if (titleRef.current) {
                sr().reveal(titleRef.current, revealOptions)
            }

            if (buttonRef.current) {
                sr().reveal(buttonRef.current, {
                    ...revealOptions,
                    origin: 'right'
                });
            }
        }
    }, []);

    return(
        <section className="min-h-[40vh] text-white z-50 bg-gray-950 dark:bg-black flex 
        justify-center items-center dark:border-b-2 dark:border-b-white">
            <div className="flex flex-col justify-between items-center lg:flex-row gap-10 py-12 px-6 container mx-auto">
                <h2 ref={titleRef} className="text-2xl md:text-4xl font-bold lg:max-w-2xl text-center lg:text-start" style={{ fontFamily: "var(--font-space)"}}>
                    Get Custom and Reliable Digital Solution for your Business
                </h2>
                <Button 
                ref={(el) => (buttonRef.current) = el}
                variant={"background"}
                className="text-lg font-black bg-light-primary py-6" 
                size="lg">Start a Project</Button>
            </div>
        </section>
    )
}