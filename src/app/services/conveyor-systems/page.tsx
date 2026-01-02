import Hero from "@/components/Hero";
import Link from "next/link";

export default function ConveyorSystemsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Special Conveyor Systems"
                subtitle="Custom conveyor design, fabrication, and installation for the harshest industrial environments."
            />

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Overview */}
                        <section>
                            <h2 className="font-display text-4xl font-bold mb-6 text-gray-900">Service Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We specialize in engineering conveyor systems that withstand extreme conditions, from high heat to heavy abrasion.
                                Our focus is on durability, reliability, and minimal maintenance to keep your material handling operations running smoothly.
                            </p>
                            <ul className="space-y-3 font-sans font-medium text-gray-800">
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Custom Design & Engineering</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Fabrication & Installation</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Commissioning & Training</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> System Upgrades & Retrofits</li>
                            </ul>
                        </section>

                        {/* Conveyor Types */}
                        <section>
                            <h3 className="font-display text-3xl font-bold mb-6 text-gray-900">Conveyor Types</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { name: "Heat-Resistant Conveyors", desc: "For handling hot materials like clinker or slag." },
                                    { name: "Abrasion-Resistant Belts", desc: "Designed for sharp ores and aggregates." },
                                    { name: "Drag Conveyors", desc: "Enclosed transport for dust control." },
                                    { name: "Screw Conveyors", desc: "Efficient for granular or semi-solid materials." }
                                ].map(item => (
                                    <div key={item.name} className="bg-gray-50 p-6 border border-gray-100 rounded-lg">
                                        <span className="font-bold text-gray-900 block mb-2">{item.name}</span>
                                        <span className="text-sm text-gray-600">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Components */}
                        <section>
                            <h3 className="font-display text-3xl font-bold mb-6 text-gray-900">High-Performance Components</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Wear-Resistant Belting",
                                    "Heavy-Duty Drives",
                                    "Impact Beds",
                                    "Tracking Systems",
                                    "Dust Suppression"
                                ].map(comp => (
                                    <span key={comp} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-bold uppercase tracking-wide">
                                        {comp}
                                    </span>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 sticky top-24">
                            <h3 className="font-display text-2xl font-bold mb-6 text-gray-900">Technical Expertise</h3>
                            <ul className="space-y-4 text-gray-700 mb-8">
                                <li className="pb-4 border-b border-gray-200">Load Capacity Calculations</li>
                                <li className="pb-4 border-b border-gray-200">Material Flow Analysis</li>
                                <li className="pb-4 border-b border-gray-200">Drive System Selection</li>
                                <li className="pb-4 border-b border-gray-200">Integration with Existing Plant</li>
                            </ul>

                            <div className="bg-primary p-6 rounded-lg text-center">
                                <h4 className="font-display text-xl font-bold mb-2">Request Design</h4>
                                <p className="text-sm mb-4">Let us engineer a solution for your material handling needs.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block w-full bg-black text-white font-bold py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
