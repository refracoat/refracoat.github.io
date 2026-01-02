import Hero from "@/components/Hero";
import Link from "next/link";

export default function CementIndustryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Cement Industry"
                subtitle="Protection systems for cement plants."
            />

            <div className="container mx-auto px-4 py-20">
                <section className="mb-16">
                    <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Industry Overview</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                        Cement production involves extreme heat and abrasive materials at every stage. We offer integrated solutions that address both high-temperature insulation needs and wear protection for material handling.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 className="font-display text-2xl font-bold mb-6 text-primary">Applications</h3>
                        <ul className="space-y-4 text-gray-700">
                            {[
                                "Kiln refractory systems",
                                "Clinker cooler linings",
                                "Raw material handling chutes",
                                "Cement mill linings",
                                "Bucket elevator protection",
                                "Cyclone and duct linings",
                                "Storage silo discharge systems"
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
                                "High-temperature refractory installation",
                                "Abrasion-resistant rubber linings",
                                "Custom conveyor systems for cement",
                                "Emergency repair services"
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
                        <Link href="/services/thermal-insulation" className="group block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <span className="font-bold text-gray-900 group-hover:text-primary">Thermal Insulation →</span>
                        </Link>
                        <Link href="/services/conveyor-systems" className="group block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <span className="font-bold text-gray-900 group-hover:text-primary">Conveyor Systems →</span>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
