"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SlideInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "left" | "right";
    distance?: number;
}

export default function SlideIn({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
    direction = "left",
    distance = 100,
}: SlideInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const initial = {
        opacity: 0,
        x: direction === "left" ? -distance : distance,
    };

    return (
        <div ref={ref} className={className}>
            <motion.div
                initial={initial}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
