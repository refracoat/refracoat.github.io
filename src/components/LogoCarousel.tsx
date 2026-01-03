"use client";

import Image from "next/image";

import Link from "next/link";

const logos = [
    { src: "/clients-logo/maaden-logo.svg", alt: "MAADEN", href: "https://www.maaden.com/" },
    { src: "/clients-logo/managem-logo.svg", alt: "Managem", href: "https://www.managemgroup.com/", scale: "scale-140" },
    { src: "/clients-logo/ocp-logo.svg", alt: "OCP Group", href: "https://www.ocpgroup.ma/" },
];

export default function LogoCarousel() {
    return (
        <div className="w-full py-12 bg-white border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="font-display text-lg text-gray-400 uppercase tracking-widest font-bold">
                    Trusted by Industry Leaders
                </p>
            </div>

            {/* CSS Animation Styles */}
            <style jsx>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        .group:hover .animate-slide {
          animation-play-state: paused;
        }
      `}</style>

            <div className="flex group">
                {/* First copy */}
                <div className="flex gap-32 items-center flex-shrink-0 pr-32 animate-slide">
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <Link
                            key={`a-${index}`}
                            href={logo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative w-40 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 block ${logo.scale || ''}`}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                            />
                        </Link>
                    ))}
                </div>

                {/* Second copy for seamless loop */}
                <div className="flex gap-32 items-center flex-shrink-0 pr-32 animate-slide">
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <Link
                            key={`b-${index}`}
                            href={logo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative w-40 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 block ${logo.scale || ''}`}
                        >

                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
