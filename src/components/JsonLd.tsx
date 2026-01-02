export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Refracoat",
        "url": "https://www.refracoat.com",
        "logo": "https://www.refracoat.com/logo-2.svg",
        "description": "Specialized Refractory & Surface Protection Solutions for extreme industrial environments.",
        "email": "contact@refracoat.com",
        "telephone": "+212 662 338 600",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bureau N°6, 2e étage, lot 11, Lotissement BREIJA",
            "addressLocality": "El Jadida",
            "addressCountry": "MA"
        },
        // Add sameAs if we have social links in the future
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
