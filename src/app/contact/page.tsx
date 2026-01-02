"use client";
import Hero from "@/components/Hero";
import { useForm, SubmitHandler } from "react-hook-form";
import PageWrapper from "@/components/animations/PageWrapper";
import SlideIn from "@/components/animations/SlideIn";
import FadeIn from "@/components/animations/FadeIn";
import * as motion from "framer-motion/client";

type ContactFormData = {
    companyName: string;
    companyId: string;
    contactPerson: string;
    email: string;
    phone: string;
    industry: string;
    service: string;
    location: string;
    message: string;
    file: FileList;
};

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit: SubmitHandler<ContactFormData> = (data) => {
        console.log(data);
        // Placeholder for submission logic
        alert("Thank you for your enquiry. We will contact you shortly.");
    };

    return (
        <PageWrapper className="min-h-screen bg-white">
            <Hero
                title="Contact Us"
                subtitle="Get in touch with our engineering team for your next project."
            />

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Contact Details */}
                    <SlideIn direction="left" delay={0.2} className="h-full">
                        <div>
                            <h2 className="font-display text-4xl font-bold mb-8 text-gray-900">Get in Touch</h2>
                            <p className="text-lg text-gray-600 mb-12">
                                Have a project in mind? Fill out the form or contact us directly using the details below. Our team is ready to assist with technical specifications and site assessments.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center mr-6 text-primary shrink-0" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <address className="not-italic">
                                        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Office</h3>
                                        <p className="text-gray-600">
                                            Bureau N°6, 2e étage,<br />
                                            lot 11, Lotissement BREIJA<br />
                                            El Jadida, Morocco
                                        </p>
                                    </address>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center mr-6 text-primary shrink-0" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.25V4.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Phone & Email</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:+212662338600" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">+212 662 338 600</a><br />
                                            <a href="mailto:contact@refracoat.com" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">contact@refracoat.com</a><br />
                                            <a href="mailto:sales@refracoat.com" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">sales@refracoat.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center mr-6 text-primary shrink-0" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                                        <p className="text-gray-600">
                                            Monday - Friday: 8:00 - 18:00<br />
                                            Saturday: 8:00 - 12:00<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideIn>

                    {/* Contact Form */}
                    <FadeIn delay={0.3} direction="up" className="h-full">
                        <div className="bg-gray-50 p-8 border border-gray-200 rounded-xl shadow-sm h-full">
                            <h2 className="font-display text-3xl font-bold mb-8 text-gray-900">Project Enquiry</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-bold text-gray-700 mb-2">
                                            Company Name <span className="text-primary" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            {...register("companyName", { required: "Company Name is required" })}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white`}
                                            aria-invalid={errors.companyName ? "true" : "false"}
                                        />
                                        {errors.companyName && <span className="text-red-500 text-xs mt-1 block">{errors.companyName.message}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="companyId" className="block text-sm font-bold text-gray-700 mb-2">
                                            Company ID (ICE) <span className="text-primary" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="companyId"
                                            {...register("companyId", { required: "Company ID is required" })}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.companyId ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white`}
                                            aria-invalid={errors.companyId ? "true" : "false"}
                                        />
                                        {errors.companyId && <span className="text-red-500 text-xs mt-1 block">{errors.companyId.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="contactPerson" className="block text-sm font-bold text-gray-700 mb-2">
                                            Contact Name <span className="text-primary" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="contactPerson"
                                            {...register("contactPerson", { required: "Contact Name is required" })}
                                            autoComplete="name"
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.contactPerson ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white`}
                                            aria-invalid={errors.contactPerson ? "true" : "false"}
                                        />
                                        {errors.contactPerson && <span className="text-red-500 text-xs mt-1 block">{errors.contactPerson.message}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                            Email <span className="text-primary" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            autoComplete="email"
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white`}
                                            aria-invalid={errors.email ? "true" : "false"}
                                        />
                                        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                                            Phone <span className="text-primary" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            {...register("phone", {
                                                required: "Phone number is required",
                                                pattern: {
                                                    value: /^[0-9+\-\s()]*$/,
                                                    message: "Invalid phone number"
                                                }
                                            })}
                                            autoComplete="tel"
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white`}
                                            aria-invalid={errors.phone ? "true" : "false"}
                                        />
                                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-2">
                                            Location <span className="text-primary" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            {...register("location", { required: "Location is required" })}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.location ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white`}
                                            aria-invalid={errors.location ? "true" : "false"}
                                        />
                                        {errors.location && <span className="text-red-500 text-xs mt-1 block">{errors.location.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="industry" className="block text-sm font-bold text-gray-700 mb-2">Industry Sector</label>
                                        <select
                                            id="industry"
                                            {...register("industry")}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                                        >
                                            <option value="">Select Industry...</option>
                                            <option value="chemical">Chemical</option>
                                            <option value="oil-gas">Oil & Gas</option>
                                            <option value="mining">Mining</option>
                                            <option value="cement">Cement</option>
                                            <option value="steel">Steel</option>
                                            <option value="energy">Energy</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Service Required</label>
                                        <select
                                            id="service"
                                            {...register("service")}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                                        >
                                            <option value="">Select Service...</option>
                                            <option value="insulation">Thermal Insulation</option>
                                            <option value="surface">Surface Protection</option>
                                            <option value="conveyor">Conveyor Systems</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                        Project Description <span className="text-primary" aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        {...register("message", { required: "Project description is required" })}
                                        rows={4}
                                        placeholder="Please describe your project..."
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white`}
                                        aria-invalid={errors.message ? "true" : "false"}
                                    ></textarea>
                                    {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                                </div>

                                <div>
                                    <label htmlFor="file" className="block text-sm font-bold text-gray-700 mb-2">Specifications Upload</label>
                                    <input
                                        type="file"
                                        id="file"
                                        {...register("file")}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-primary hover:file:bg-gray-100"
                                    />
                                    <span className="text-xs text-gray-500 mt-1 block">Optional. PDF, DOCX, or Images. Max 10MB.</span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-primary hover:text-black transition-colors uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </PageWrapper>


    );
}
