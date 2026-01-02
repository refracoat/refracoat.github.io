import Hero from "@/components/Hero";
import Link from "next/link";

export default function SurfaceProtectionPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Surface Protection"
                subtitle="Advanced rubber linings and protective coatings to combat corrosion, abrasion, and impact."
            />

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Overview */}
                        <section>
                            <h2 className="font-display text-4xl font-bold mb-6 text-gray-900">Service Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Our surface protection solutions utilize high-performance rubber linings and coatings to extend the lifespan of your equipment.
                                We protect against severe abrasion, chemical corrosion, and heavy impact, ensuring operational continuity in harsh environments.
                            </p>
                            <ul className="space-y-3 font-sans font-medium text-gray-800">
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> New Lining Installation</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Re-lining & Repair Services</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Wear Assessment & Monitoring</li>
                                <li className="flex items-center"><span className="text-primary mr-3 text-xl">■</span> Emergency Repair Mobilization</li>
                            </ul>
                        </section>

                        {/* Applications */}
                        <section>
                            <h3 className="font-display text-3xl font-bold mb-6 text-gray-900">Typical Applications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Chutes & Hoppers",
                                    "Pipes & Pipelines",
                                    "Tanks & Chemical Vessels",
                                    "Screens & Crushers",
                                    "Cyclones & Separators",
                                    "Pump Casings"
                                ].map(item => (
                                    <div key={item} className="bg-gray-50 p-6 border border-gray-100 rounded-lg">
                                        <span className="font-bold text-gray-900">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Materials */}
                        <section>
                            <h3 className="font-display text-3xl font-bold mb-6 text-gray-900">Lining Materials</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Natural Rubber",
                                    "Synthetic Rubber",
                                    "Wear-Resistant Compounds",
                                    "Chemical-Resistant Formulations",
                                    "Ceramic Embedded Rubber"
                                ].map(mat => (
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
                            <h3 className="font-display text-2xl font-bold mb-6 text-gray-900">Application Methods</h3>
                            <ul className="space-y-4 text-gray-700 mb-8">
                                <li className="pb-4 border-b border-gray-200">Cold Bonding</li>
                                <li className="pb-4 border-b border-gray-200">Hot Vulcanization</li>
                                <li className="pb-4 border-b border-gray-200">Spray-Applied Coatings</li>
                                <li className="pb-4 border-b border-gray-200">Industrial Surface Preparation</li>
                            </ul>

                            <div className="bg-primary p-6 rounded-lg text-center">
                                <h4 className="font-display text-xl font-bold mb-2">Get a Quote</h4>
                                <p className="text-sm mb-4">Protect your assets from wear and tear today.</p>
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
