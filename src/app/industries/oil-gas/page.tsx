import Hero from "@/components/Hero";
import Link from "next/link";

export default function OilGasIndustryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Oil & Gas Industry"
                subtitle="Corrosion protection for petrochemical facilities."
            />

            <div className="container mx-auto px-4 py-20">
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Industry Overview</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                        Petrochemical facilities face extreme challenges from corrosive environments, high temperatures, and diverse pressure conditions. Safety and asset longevity are paramount. Refracoat delivers protection systems engineered to withstand these harsh realities.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 className="font-display text-2xl font-bold mb-6 text-primary">Applications</h3>
                        <ul className="space-y-4 text-gray-700">
                            {[
                                "Reactor vessel linings",
                                "Catalyst handling systems",
                                "Flare stack protection",
                                "Process vessel rubber linings",
                                "Acid storage tank protection",
                                "Offshore equipment protection"
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
                                "Chemical-resistant rubber linings",
                                "High-temperature refractory systems",
                                "Corrosion protection coatings",
                                "Explosion-proof installation methods"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-primary mr-3">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <section>
                    <h2 className="font-display text-3xl font-bold mb-8 text-gray-900">Services Offered</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <Link href="/services/surface-protection" className="group block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <span className="font-bold text-gray-900 group-hover:text-primary">Surface Protection →</span>
                        </Link>
                        <Link href="/services/thermal-insulation" className="group block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <span className="font-bold text-gray-900 group-hover:text-primary">Thermal Insulation →</span>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
