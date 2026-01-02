import Hero from "@/components/Hero";
import Link from 'next/link';

export default function IndustriesPage() {
    const industries = [
        { name: "Chemical", desc: "Corrosion-resistant solutions for reactors, storage tanks, and process piping.", slug: "chemical" },
        { name: "Oil & Gas", desc: "Protection for petrochemical facilities against harsh environmental and process conditions.", slug: "oil-gas" },
        { name: "Mining", desc: "Abrasion-resistant linings and conveyor systems for ore handling and processing.", slug: "mining" },
        { name: "Cement", desc: "Refractory solutions for kilns and wear protection for material handling.", slug: "cement" },
        { name: "Steel", desc: "High-temperature insulation for furnaces and ladles.", slug: "steel" },
        { name: "Energy", desc: "Thermal efficiency solutions for boilers and power generation equipment.", slug: "energy" }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Our Industries"
                subtitle="Specialized expertise for every sector we serve."
            />

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                    {industries.map((ind) => (
                        <div
                            key={ind.name}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-primary group"
                            role="listitem"
                        >
                            <h2 className="font-display text-3xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">{ind.name}</h2>
                            <p className="text-gray-600 mb-6">{ind.desc}</p>
                            <Link
                                href={`/industries/${ind.slug}`}
                                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-gray-900 group-hover:text-primary transition-colors focus:outline-none focus:text-primary"
                                aria-label={`Learn more about ${ind.name} solutions`}
                            >
                                Learn More <span className="ml-2">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
