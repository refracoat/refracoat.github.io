import Hero from "@/components/Hero";

export default function OurStoryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Our Story"
                subtitle="The history and evolution of Refracoat into a leader in industrial protection."
            />

            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <section className="mb-20">
                    <h2 className="font-display text-4xl font-bold mb-8 text-gray-900">Building on Excellence</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">
                            Founded with a vision to provide superior refractory and surface protection solutions, Refracoat has evolved from a specialized service provider into a comprehensive industrial partner.
                        </p>
                        <p className="mb-6">
                            Over the years, we have expanded our core focus from thermal insulation to encompass a full spectrum of surface protection technologies, including advanced rubber linings and custom conveyor systems. Reliability and engineering precision remain at the heart of everything we do.
                        </p>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="font-display text-4xl font-bold mb-8 text-gray-900">Milestones & Achievements</h2>
                    <div className="border-l-4 border-primary pl-8 space-y-12">
                        <div>
                            <span className="text-primary font-bold text-xl block mb-2">Foundation</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Company Establishment</h3>
                            <p className="text-gray-600">Refracoat was established to address the growing need for specialized high-temperature insulation services in the region.</p>
                        </div>
                        <div>
                            <span className="text-primary font-bold text-xl block mb-2">Expansion</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Portfolio Growth</h3>
                            <p className="text-gray-600">Introduced surface protection and rubber lining divisions to offer complete plant protection solutions.</p>
                        </div>
                        <div>
                            <span className="text-primary font-bold text-xl block mb-2">Innovation</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced Engineering</h3>
                            <p className="text-gray-600">Launched our in-house engineering and design department for custom conveyor systems and complex refractory linings.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
