import Link from 'next/link';
import FadeIn from './animations/FadeIn';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
    centered?: boolean;
    variant?: 'default' | 'primary';
    rightElement?: React.ReactNode;
}

export default function Hero({
    title,
    subtitle,
    ctaText,
    ctaLink,
    centered = false,
    variant = 'default',
    rightElement
}: HeroProps) {
    const isPrimary = variant === 'primary';
    const textColor = isPrimary ? "text-gray-900" : "text-white";
    const subTextColor = isPrimary ? "text-gray-800" : "text-gray-300";

    // Alignment classes
    // If centered: justify-center items-center text-center
    // If not centered: justify-start text-left
    const alignmentClasses = centered
        ? "justify-center items-center text-center"
        : "justify-start text-left";

    const bgClasses = isPrimary
        ? "bg-primary"
        : "bg-gray-900";

    return (
        <section className={`relative w-full h-auto min-h-[60vh] min-h-[500px] flex flex-col overflow-hidden ${alignmentClasses} ${bgClasses}`}>
            {/* Background elements - hidden from screen readers */}
            <div className={`absolute inset-0 z-0 ${isPrimary ? 'bg-primary' : 'bg-neutral-900'}`} aria-hidden="true">
                {!isPrimary && <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />}
                {isPrimary && <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 z-10" />}
            </div>

            <div className="container mx-auto px-4 relative z-20 py-20 md:py-0 flex flex-col flex-grow">
                <div className={`flex flex-col md:flex-row flex-grow gap-12 ${centered ? 'justify-center items-center' : 'justify-between'}`}>
                    <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : 'flex-1 pt-28 md:pt-36'}`}>
                        <FadeIn direction="up" delay={0.1}>
                            <h1 className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide leading-tight mb-6 ${textColor}`}>
                                {title}
                            </h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.3}>
                            <p className={`font-sans text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed ${subTextColor} ${centered ? 'mx-auto' : ''}`}>
                                {subtitle}
                            </p>
                        </FadeIn>

                        {ctaText && ctaLink && (
                            <FadeIn direction="up" delay={0.5}>
                                <Link
                                    href={ctaLink}
                                    className={`inline-block font-sans font-bold text-lg px-8 py-4 uppercase tracking-wider transition-colors ${isPrimary
                                        ? "bg-black text-white hover:bg-gray-800"
                                        : "bg-primary text-black hover:bg-white"
                                        }`}
                                    aria-label={`${ctaText} - ${subtitle}`}
                                >
                                    {ctaText}
                                </Link>
                            </FadeIn>
                        )}
                    </div>

                    {rightElement && (
                        <div className="hidden md:flex flex-1 max-w-2xl w-full justify-center md:justify-end items-center">
                            <FadeIn direction="left" delay={0.4}>
                                {rightElement}
                            </FadeIn>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
