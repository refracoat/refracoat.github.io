import Hero from "@/components/Hero";
import Link from "next/link";

export default function ThermalInsulationPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Thermal Insulation"
                subtitle="Expert installation, maintenance, and repair of refractory linings for optimal heat management."
            />

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Overview */}
                        <section>
                            <h2 className="font-display text-4xl font-bold mb-6 text-gray-900">Service Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Our thermal insulation services focus on the professional installation, maintenance, and repair of refractory linings.
                                Proper insulation is critical for reducing heat loss, improving energy efficiency, and ensuring the safety of your facility and personnel.
                            </p>
                            <ul className="space-y-3 font-sans font-medium text-gray-800">
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> New Installation Projects</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Maintenance & Repair Services</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Emergency Breakdown Support</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Periodic Inspections & Audits</li>
                            </ul>
                        </section>

                        {/* Applications */}
                        <section>
                            <h3 className="font-display text-3xl font-bold mb-6 text-gray-900">Typical Applications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Kilns & Furnaces",
                                    "Boilers & Incinerators",
                                    "Reactors & Vessels",
                                    "Ladles & Tundishes",
                                    "High-Temperature Equipment"
                                ].map(item => (
                                    <div key={item} className="bg-gray-50 p-6 border border-gray-100 rounded-lg">
                                        <span className="font-bold text-gray-900">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Materials */}
                        <section>
                            <h3 className="font-display text-3xl font-bold mb-6 text-gray-900">Materials We Work With</h3>
                            <p className="text-gray-600 mb-6">We supply and install a wide range of refractory materials suited for various temperature ranges and chemical environments.</p>
                            <div className="flex flex-wrap gap-3">
                                {["Castables", "Bricks", "Ceramics", "Fiber Films", "Insulating Firebrick"].map(mat => (
                                    <span key={mat} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-bold uppercase tracking-wide">
                                        {mat}
                                    </span>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 sticky top-24">
                            <h3 className="font-display text-2xl font-bold mb-6 text-gray-900">Engineering Capabilities</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="pb-4 border-b border-gray-200">Engineering & Design Support</li>
                                <li className="pb-4 border-b border-gray-200">Heat Loss Calculations</li>
                                <li className="pb-4 border-b border-gray-200">Material Selection Consultation</li>
                                <li className="pb-4">Certified Installation Methods</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
