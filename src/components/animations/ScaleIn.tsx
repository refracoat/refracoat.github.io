"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScaleInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export default function ScaleIn({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
}: ScaleInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className={className}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
