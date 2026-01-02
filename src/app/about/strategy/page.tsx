import Hero from "@/components/Hero";

export default function OurStrategyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Our Strategy"
                subtitle="Mission, Vision, and Values driving our commitment to quality and safety."
            />

            <div className="container mx-auto px-4 py-20 max-w-5xl">

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-50 p-10 rounded-xl border border-gray-100">
                        <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Vision</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To be the undisputed industry leader in industrial surface protection and refractory solutions, recognized globally for innovation, safety, and engineering excellence.
                        </p>
                    </div>
                    <div className="bg-gray-900 text-white p-10 rounded-xl">
                        <h2 className="font-display text-3xl font-bold mb-6 text-primary">Mission</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            To extend the life of our clients&apos; critical assets through precision-engineered protection systems, while maintaining an unwavering commitment to safety, quality, and environmental stewardship.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <section className="mb-20">
                    <h2 className="font-display text-4xl font-bold mb-10 text-gray-900 text-center">Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Safety First", desc: "We believe all accidents are preventable. Safety is not just a priority, it is a value that guides every decision." },
                            { title: "Quality Excellence", desc: "We deliver right-the-first-time solutions that meet the highest international standards." },
                            { title: "Customer Partnership", desc: "We work collaboratively with clients to solve their unique challenges." },
                            { title: "Integrity", desc: "We conduct business with transparency, honesty, and ethical responsibility." },
                            { title: "Innovation", desc: "We continuously seek better materials and methods to improve performance." },
                            { title: "Sustainability", desc: "We minimize our environmental impact and help clients do the same through energy efficiency." }
                        ].map(val => (
                            <div key={val.title} className="p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                                <h3 className="font-display text-2xl font-bold mb-3 text-gray-900">{val.title}</h3>
                                <p className="text-gray-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* QHSE */}
                <section className="bg-gray-50 rounded-2xl p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl font-bold mb-8 text-gray-900">Quality, Health, Safety & Environment</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Our integrated management system ensures that every project is executed to the highest standards of quality and safety. We are committed to ISO 9001 (Quality) and ISO 45001 (Safety) principles.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-gray-800 shadow-sm">ISO 9001 Compliant</span>
                            <span className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-gray-800 shadow-sm">ISO 45001 Compliant</span>
                            <span className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-gray-800 shadow-sm">Strict QA/QC Protocols</span>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
