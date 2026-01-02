import Link from 'next/link';
import * as motion from "framer-motion/client";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: string; // Placeholder for icon
    link: string;
}

export default function ServiceCard({ title, description, link }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="h-full"
        >
            <Link
                href={link}
                className="group block h-full bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:border-primary"
                aria-label={`${title}: ${description}`}
            >
                <div className="mb-6 w-12 h-12 bg-white border border-gray-100 rounded-lg group-hover:bg-primary group-hover:border-primary transition-colors flex items-center justify-center" aria-hidden="true">
                    {/* Placeholder Icon - would be replaced by actual icons */}
                    <div className="w-6 h-6 bg-gray-400 group-hover:bg-black transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center text-sm font-bold uppercase tracking-wider text-gray-900 group-hover:text-primary transition-colors">
                    Learn More <span className="ml-2">→</span>
                </div>
            </Link>
        </motion.div>
    );
}
