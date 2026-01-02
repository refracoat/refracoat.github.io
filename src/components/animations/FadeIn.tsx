"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
    direction = "none",
    fullWidth = false,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const getInitial = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: 40 };
            case "down": return { opacity: 0, y: -40 };
            case "left": return { opacity: 0, x: 40 };
            case "right": return { opacity: 0, x: -40 };
            default: return { opacity: 0 };
        }
    };

    const to = { opacity: 1, x: 0, y: 0 };

    return (
        <div ref={ref} className={`${fullWidth ? "w-full" : ""} ${className}`}>
            <motion.div
                initial={getInitial()}
                animate={isInView ? to : {}}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
