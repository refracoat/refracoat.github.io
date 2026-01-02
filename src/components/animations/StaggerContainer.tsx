"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerContainerProps {
    children: React.ReactNode;
    delay?: number;
    staggerDelay?: number;
    className?: string;
    viewportMargin?: string;
}

export default function StaggerContainer({
    children,
    delay = 0,
    staggerDelay = 0.1,
    className = "",
    viewportMargin = "-10%",
}: StaggerContainerProps) {
    const ref = useRef(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isInView = useInView(ref, { once: true, margin: viewportMargin as any });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
