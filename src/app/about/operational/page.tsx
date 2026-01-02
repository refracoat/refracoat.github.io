"use client";

import Hero from "@/components/Hero";
import PageWrapper from "@/components/animations/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";
import { CONTACT_INFO } from "@/lib/constants";

export default function OperationalPage() {
    return (
        <PageWrapper className="min-h-screen bg-white">
            <Hero
                title="Where We Operate"
                subtitle="Strategically located to serve major industrial hubs across Morocco and North Africa."
                centered={false}
            />

            <div className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <FadeIn delay={0.1}>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 md:p-14 mb-12">
                            <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Headquarters</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Our main operations are managed from our headquarters in El Jadida, placing us in the heart of Morocco&apos;s industrial corridor.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-primary">Office Address</h3>
                                    <address className="not-italic text-gray-700">
                                        {CONTACT_INFO.address.line1}<br />
                                        {CONTACT_INFO.address.line2}<br />
                                        {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}
                                    </address>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-primary">Contact</h3>
                                    <p className="text-gray-700">
                                        Phone: <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{CONTACT_INFO.phoneDisplay}</a><br />
                                        Email: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div>
                            <h2 className="font-display text-3xl font-bold mb-8 text-gray-900 text-center">Operational Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">On-Site Services</h3>
                                    <p className="text-gray-600 text-sm">Mobile teams equipped for rapid deployment to industrial sites.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Logistics</h3>
                                    <p className="text-gray-600 text-sm">Full logistical support for material transport and equipment mobilization.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Workshop</h3>
                                    <p className="text-gray-600 text-sm">Specialized workshop facilities for off-site fabrication and preparation.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="mt-16">
                            <h2 className="font-display text-3xl font-bold mb-8 text-gray-900 text-center">Service Coverage</h2>
                            <div className="flex justify-center">
                                <img
                                    src="/service-coverage-map.svg"
                                    alt="World Map highlighting service coverage in Africa and Gulf Countries"
                                    className="w-full max-w-5xl h-auto object-contain"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </PageWrapper>
    );
}
