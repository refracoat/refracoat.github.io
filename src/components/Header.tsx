"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import * as motion from "framer-motion/client";

export default function Header() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navItems = [
        {
            name: "About Us",
            href: "/about",
            submenu: [
                { name: "Our Story", href: "/about/story" },
                { name: "Our Strategy", href: "/about/strategy" },
                { name: "Where We Operate", href: "/about/operational" }
            ]
        },
        {
            name: "Services",
            href: "/services",
            submenu: [
                { name: "Thermal Insulation", href: "/services/thermal-insulation" },
                { name: "Surface Protection", href: "/services/surface-protection" },
                { name: "Special Conveyor Systems", href: "/services/conveyor-systems" }
            ]
        },
        {
            name: "Industries",
            href: "/industries",
            submenu: [
                { name: "Chemical", href: "/industries/chemical" },
                { name: "Oil & Gas", href: "/industries/oil-gas" },
                { name: "Mining", href: "/industries/mining" },
                { name: "Cement", href: "/industries/cement" },
                { name: "Steel", href: "/industries/steel" },
                { name: "Energy", href: "/industries/energy" }
            ]
        },
        {
            name: "Work",
            href: "/work",
            submenu: [
                { name: "Success Stories", href: "/work/success-stories" },
                { name: "Case Studies", href: "/work/case-studies" }
            ]
        }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full bg-white border-b border-gray-100 py-4 fixed top-0 z-50"
        >
            <div className="container mx-auto px-4 flex justify-between items-center relative">

                {/* Left Side: Logo + Main Nav */}
                <div className="flex items-center gap-12">
                    <Link
                        href="/"
                        className="shrink-0"
                        aria-label="Refracoat Solutions - Home"
                    >
                        <img
                            src="/logo-4.svg"
                            alt="Refracoat Solutions"
                            className="h-10 w-auto"
                            width={200}
                            height={40}
                        />
                    </Link>

                    <nav
                        className="hidden lg:flex space-x-6 xl:space-x-8 font-sans font-medium text-sm tracking-wider uppercase"
                        aria-label="Main navigation"
                    >
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setOpenDropdown(item.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`py-4 transition-colors ${pathname.startsWith(item.href) ? 'text-primary' : 'hover:text-primary'}`}
                                    aria-expanded={openDropdown === item.name}
                                    aria-haspopup={item.submenu ? "true" : undefined}
                                >
                                    {item.name}
                                </Link>

                                {/* Dropdown */}
                                {item.submenu && (
                                    <div
                                        className={`absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2`}
                                        role="menu"
                                        aria-label={`${item.name} submenu`}
                                    >
                                        <div className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden py-2">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary text-xs font-bold transition-colors"
                                                    role="menuitem"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Right Side: Contact Link + Mobile Burger */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/contact"
                        className="hidden lg:inline-flex font-sans font-medium text-sm tracking-wider uppercase text-gray-900 hover:text-primary transition-colors"
                    >
                        Contact Us
                    </Link>


                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-900"
                        aria-label="Open mobile menu"
                        aria-expanded="false"
                        aria-controls="mobile-menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
