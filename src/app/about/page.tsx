import Hero from "@/components/Hero";
import Link from "next/link";
import PageWrapper from "@/components/animations/PageWrapper";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import * as motion from "framer-motion/client";

export default function AboutPage() {
    return (
        <PageWrapper className="min-h-screen bg-white">
            <Hero
                title="About Refracoat"
                subtitle="A legacy of excellence in industrial surface protection."
                rightElement={
                    <img
                        src="/logo-1.svg"
                        alt="Refracoat Logo"
                        className="h-80 w-auto max-w-full object-contain"
                    />
                }
            />

            <div className="container mx-auto px-4 py-24">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <motion.div variants={staggerItem}>
                        <Link href="/about/story" className="group block bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all">
                            <h2 className="font-display text-3xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">Our Story</h2>
                            <p className="text-gray-600 mb-6">Discover our history, milestones, and the journey that built Refracoat.</p>
                            <span className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-primary">Read More →</span>
                        </Link>
                    </motion.div>

                    <motion.div variants={staggerItem}>
                        <Link href="/about/strategy" className="group block bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all">
                            <h2 className="font-display text-3xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">Our Strategy</h2>
                            <p className="text-gray-600 mb-6">Explore our mission, vision, and the core values that guide our operations.</p>
                            <span className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-primary">Read More →</span>
                        </Link>
                    </motion.div>

                    <motion.div variants={staggerItem}>
                        <Link href="/about/operational" className="group block bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all">
                            <h2 className="font-display text-3xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">Where We Operate</h2>
                            <p className="text-gray-600 mb-6">View our locations, facilities, and service coverage areas.</p>
                            <span className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-primary">Read More →</span>
                        </Link>
                    </motion.div>

                </StaggerContainer>
            </div>
        </PageWrapper>
    );
}
