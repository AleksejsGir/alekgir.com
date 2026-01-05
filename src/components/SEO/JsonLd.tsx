import React from "react";
import { projects } from "@/data/projects";

const JsonLd = () => {
    // Main WebSite schema
    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "AlekGirDev",
        url: "https://alekgirdev.com",
        description: "Full-Stack Developer Portfolio - Python, Django, React Development Services",
        publisher: {
            "@type": "Person",
            name: "Aleksejs Giruckis",
        },
        sameAs: [
            "https://www.linkedin.com/in/aleksejs-giruckis-0569a7353",
            "https://github.com/AleksejsGir"
        ]
    };

    // ProfessionalService schema for better local/service SEO
    const serviceData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "AlekGirDev",
        url: "https://alekgirdev.com",
        description: "Professional web development services specializing in Python, Django, and React applications",
        provider: {
            "@type": "Person",
            name: "Aleksejs Giruckis"
        },
        areaServed: {
            "@type": "Country",
            name: "United Kingdom"
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Chatteris",
            addressRegion: "Cambridgeshire",
            addressCountry: "GB"
        },
        serviceType: [
            "Django Web Development",
            "React Application Development",
            "Full-Stack Development",
            "Python Development",
            "REST API Development",
            "Telegram Bot Development"
        ],
        availableLanguage: ["English", "Russian", "Latvian"]
    };

    // Person schema for developer profile
    const personData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Aleksejs Giruckis",
        alternateName: "Alek Gir",
        url: "https://alekgirdev.com",
        jobTitle: "Full-Stack Developer",
        description: "European-certified Full-Stack Developer specializing in Python, Django, and React with 3+ years production experience",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Chatteris",
            addressRegion: "Cambridgeshire",
            addressCountry: "GB"
        },
        email: "giruckisaleksejs@gmail.com",
        telephone: "+44-7780-086353",
        knowsAbout: [
            "Python", "Django", "React", "Full-Stack Development", "Web Development",
            "API Development", "PostgreSQL", "TypeScript", "Next.js", "AI Integration",
            "Telegram Bot Development", "Django REST Framework"
        ],
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Tel-Ran.de GmbH",
            description: "Python Software Development with AI & ML"
        },
        award: "European Certification Score: 94/100",
        workLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Chatteris",
                addressRegion: "Cambridgeshire",
                addressCountry: "GB"
            }
        },
        sameAs: [
            "https://www.linkedin.com/in/aleksejs-giruckis-0569a7353",
            "https://github.com/AleksejsGir"
        ]
    };

    // ItemList schema for portfolio projects
    const portfolioData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "AlekGirDev Portfolio",
        description: "Full-Stack development projects and case studies",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.name,
            url: `https://alekgirdev.com/projects/${project.slug}`,
            description: project.description
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
            />
        </>
    );
};

export default JsonLd;

