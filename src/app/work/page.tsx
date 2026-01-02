import Hero from "@/components/Hero";

export default function WorkPage() {
    const projects = [
        { title: "Refinery Expansion", location: "Houston, TX", service: "Thermal Insulation", desc: "Complete refractory lining for new catalytic cracker unit." },
        { title: "Mine Conveyor Upgrade", location: "Perth, Australia", service: "Conveyor Systems", desc: "Design and installation of high-capacity ore transport system." },
        { title: "Chemical Tank Relining", location: "Rotterdam, NL", service: "Surface Protection", desc: "Emergency rubber relining of acid storage tanks during shutdown." }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Our Work"
                subtitle="A selection of our recent projects and success stories."
            />

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:border-primary">
                            <div className="h-48 bg-gray-200 w-full overflow-hidden relative">
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                                    Project Image
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-wide text-gray-600 rounded-full mb-4">{proj.service}</span>
                                <h3 className="font-display text-2xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{proj.title}</h3>
                                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">{proj.location}</p>
                                <p className="text-gray-600 border-t border-gray-100 pt-4">
                                    {proj.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center bg-gray-50 p-12 rounded-xl">
                    <h2 className="font-display text-3xl font-bold mb-4 text-gray-900">Proven Track Record</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">500+</div>
                            <div className="text-sm uppercase tracking-wider text-gray-600">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">15+</div>
                            <div className="text-sm uppercase tracking-wider text-gray-600">Years Active</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">20+</div>
                            <div className="text-sm uppercase tracking-wider text-gray-600">Countries Served</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
