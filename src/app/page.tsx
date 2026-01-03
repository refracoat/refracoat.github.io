"use client";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

import * as motion from "framer-motion/client";
import PageWrapper from "@/components/animations/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import SlideIn from "@/components/animations/SlideIn";
import { useState } from "react";
import Modal from "@/components/Modal";

interface ServiceDetail {
  title: string;
  summary: string;
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const industries = [
    "Chemical", "Oil & Gas", "Mining", "Cement", "Steel", "Energy"
  ];

  const servicesData: Record<string, ServiceDetail> = {
    "Thermal Insulation": {
      title: "Thermal Insulation",
      summary: "Our thermal insulation services focus on the professional installation, maintenance, and repair of refractory linings. Proper insulation is critical for reducing heat loss, improving energy efficiency, and ensuring the safety of your facility and personnel."
    },
    "Surface Protection": {
      title: "Surface Protection",
      summary: "Our surface protection solutions utilize high-performance rubber linings and coatings to extend the lifespan of your equipment. We protect against severe abrasion, chemical corrosion, and heavy impact, ensuring operational continuity in harsh environments."
    },
    "Conveyor Systems": {
      title: "Conveyor Systems",
      summary: "We specialize in engineering conveyor systems that withstand extreme conditions, from high heat to heavy abrasion. Our focus is on durability, reliability, and minimal maintenance to keep your material handling operations running smoothly."
    }
  };

  const handleOpenService = (title: string) => {
    const service = servicesData[title];
    if (service) {
      setSelectedService(service);
    }
  };

  return (
    <PageWrapper className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero
        title="Industrial Protection Excellence"
        subtitle="Specialized Refractory & Surface Protection Solutions for the most demanding environments."
        ctaText="Learn More"
        ctaLink="/about"
        centered={true}
        variant="primary"
      />

      <LogoCarousel />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <h2 className="font-display text-4xl font-bold mb-4 text-gray-900">Our Core Services</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-gray-600 font-sans text-lg">
                Delivering precision-engineered solutions to extend equipment life and ensure operational safety.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Thermal Insulation"
              description="Expert installation, maintenance, and repair of refractory linings for kilns, furnaces, and high-temperature vessels."
              onClick={() => handleOpenService("Thermal Insulation")}
            />
            <ServiceCard
              title="Surface Protection"
              description="Advanced rubber linings and protective coatings to prevent corrosion and abrasion in harsh industrial applications."
              onClick={() => handleOpenService("Surface Protection")}
            />
            <ServiceCard
              title="Conveyor Systems"
              description="Custom design and installation of special conveyor systems optimized for material handling in extreme conditions."
              onClick={() => handleOpenService("Conveyor Systems")}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl font-bold mb-12 text-center text-gray-900">Industries Served</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <motion.div key={industry} variants={staggerItem}>
                <Link
                  href={`/industries/${industry.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="flex items-center justify-center h-32 bg-white border border-gray-200 rounded-lg font-display text-xl font-bold hover:border-primary hover:text-primary transition-colors hover:shadow-lg"
                >
                  {industry}
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Differentiators / Proven Quality */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <SlideIn direction="left">
              <h2 className="font-display text-4xl font-bold mb-6 text-white">Proven Quality</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With years of specialized experience, Refracoat stands as a leader in industrial protection.
                Our commitment to engineering credibility and safety ensures that every project meets the highest standards.
              </p>
              <ul className="space-y-4 font-sans font-medium text-primary">
                <li className="flex items-center">✓ Certified Expertise</li>
                <li className="flex items-center">✓ Rapid Emergency Response</li>
                <li className="flex items-center">✓ Comprehensive Maintenance Plans</li>
              </ul>
            </SlideIn>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <div className="grid grid-cols-2 gap-8 text-center">
              <FadeIn delay={0.2}>
                <div>
                  <div className="font-display text-5xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div>
                  <div className="font-display text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Completed</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="font-display text-5xl font-bold mb-6 text-black">Ready to Protect Your Assets?</h2>
            <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Contact our engineering team for a consultation on your thermal or surface protection needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white font-sans font-bold text-lg px-10 py-5 uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
      >
        <p>{selectedService?.summary}</p>
      </Modal>
    </PageWrapper>
  );
}
