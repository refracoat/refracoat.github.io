import Hero from "@/components/Hero";
import Link from "next/link";

export default function EnergyIndustryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Energy Industry"
                subtitle="Thermal protection for power facilities."
            />

            <div className="container mx-auto px-4 py-20">
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Industry Overview</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                        Power generation facilities require optimal thermal efficiency and protection against high-temperature corrosion. Whether coal-fired, biomass, or waste-to-energy, Refracoat ensures reliable operation through advanced lining systems.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 className="font-display text-2xl font-bold mb-6 text-primary">Applications</h3>
                        <ul className="space-y-4 text-gray-700">
                            {[
                                "Boiler refractory linings",
                                "Furnace and combustion chamber protection",
                                "Flue gas duct linings",
                                "Ash handling system protection",
                                "Coal and fuel handling conveyors",
                                "Stack linings"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-primary mr-3">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 className="font-display text-2xl font-bold mb-6 text-primary">Our Solutions</h3>
                        <ul className="space-y-4 text-gray-700">
                            {[
                                "High-temperature refractory systems",
                                "Acid-resistant coatings and linings",
                                "Wear-resistant conveyor systems",
                                "Scheduled maintenance during shutdowns"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-primary mr-3">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <section className="mb-20">
                    <h2 className="font-display text-3xl font-bold mb-8 text-gray-900">Fuel Types Served</h2>
                    <div className="flex flex-wrap gap-4">
                        {["Coal-fired plants", "Biomass facilities", "Waste-to-energy plants", "Gas turbine facilities"].map((fuel) => (
                            <span key={fuel} className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-bold text-sm uppercase tracking-wide">
                                {fuel}
                            </span>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="font-display text-3xl font-bold mb-8 text-gray-900">Services Offered</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <Link href="/services/thermal-insulation" className="group block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <span className="font-bold text-gray-900 group-hover:text-primary">Thermal Insulation →</span>
                        </Link>
                        <Link href="/services/surface-protection" className="group block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <span className="font-bold text-gray-900 group-hover:text-primary">Surface Protection →</span>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
