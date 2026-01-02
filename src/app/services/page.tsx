import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PageWrapper from "@/components/animations/PageWrapper";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import * as motion from "framer-motion/client";

export default function ServicesPage() {
    return (
        <PageWrapper className="min-h-screen bg-white">
            <Hero
                title="Our Services"
                subtitle="Comprehensive industrial protection solutions tailored to your needs."
            />

            <div className="container mx-auto px-4 py-20">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <motion.div variants={staggerItem} className="h-full">
                        <ServiceCard
                            title="Thermal Insulation"
                            description="Expert installation, maintenance, and repair of refractory linings for kilns, furnaces, and high-temperature vessels."
                            link="/services/thermal-insulation"
                        />
                    </motion.div>
                    <motion.div variants={staggerItem} className="h-full">
                        <ServiceCard
                            title="Surface Protection"
                            description="Advanced rubber linings and protective coatings to prevent corrosion and abrasion in harsh industrial applications."
                            link="/services/surface-protection"
                        />
                    </motion.div>
                    <motion.div variants={staggerItem} className="h-full">
                        <ServiceCard
                            title="Conveyor Systems"
                            description="Custom design and installation of special conveyor systems optimized for material handling in extreme conditions."
                            link="/services/conveyor-systems"
                        />
                    </motion.div>
                </StaggerContainer>
            </div>
        </PageWrapper>
    );
}
