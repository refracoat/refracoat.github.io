import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16" role="contentinfo">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">

                {/* Brand */}
                <div className="max-w-md">
                    <Link href="/" aria-label="Refracoat Solutions - Home">
                        <img
                            src="/logo-3.svg"
                            alt="Refracoat Solutions"
                            className="h-10 w-auto mb-4"
                            width={200}
                            height={40}
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Specialized Refractory & Surface Protection Solutions for extreme industrial environments.
                    </p>
                </div>

                {/* Right Side: Contact & Legal */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    {/* Contact */}
                    <div>
                        <h3 className="font-display text-lg mb-6 text-primary tracking-wide">Contact</h3>
                        <address className="space-y-3 text-sm text-gray-400 not-italic">
                            <p>
                                <a href="mailto:contact@refracoat.com" className="hover:text-white transition-colors">contact@refracoat.com</a>
                            </p>
                            <p>
                                <a href="tel:+212662338600" className="hover:text-white transition-colors">
                                    +212 662 338 600
                                </a>
                            </p>
                            <p>
                                Bureau N°6, 2e étage,<br />
                                lot 11, Lotissement BREIJA<br />
                                El Jadida, Morocco
                            </p>
                        </address>
                    </div>

                    {/* Legal */}
                    <nav aria-label="Legal information">
                        <h3 className="font-display text-lg mb-6 text-primary tracking-wide">Legal</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
                &copy; {new Date().getFullYear()} Refracoat. All rights reserved.
            </div>
        </footer>
    );
}
