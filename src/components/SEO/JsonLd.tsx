import React from "react";
import { projects } from "@/data/projects";
import { SEO_CONFIG } from "@/config/seo.config";

const JsonLd = () => {
    // Main WebSite schema
    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "AlekGir",
        url: "https://www.alekgir.com",
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
        name: "AlekGir",
        url: "https://www.alekgir.com",
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
        name: SEO_CONFIG.site.author,
        alternateName: "Alek Gir",
        url: SEO_CONFIG.site.url,
        jobTitle: SEO_CONFIG.structuredData.jobTitle,
        description: SEO_CONFIG.summary.long,
        address: {
            "@type": "PostalAddress",
            addressLocality: SEO_CONFIG.location.city,
            addressRegion: SEO_CONFIG.location.region,
            addressCountry: SEO_CONFIG.location.countryCode
        },
        email: SEO_CONFIG.contact.email,
        telephone: SEO_CONFIG.contact.phone,
        knowsAbout: SEO_CONFIG.skills.all,
        alumniOf: {
            "@type": "EducationalOrganization",
            name: SEO_CONFIG.structuredData.education.institution,
            description: SEO_CONFIG.structuredData.education.program
        },
        award: `European Certification Score: ${SEO_CONFIG.achievements.certificationScore}`,
        workLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: SEO_CONFIG.location.city,
                addressRegion: SEO_CONFIG.location.region,
                addressCountry: SEO_CONFIG.location.countryCode
            }
        },
        sameAs: [
            SEO_CONFIG.contact.linkedin,
            SEO_CONFIG.contact.github
        ]
    };

    // VideoObject schema for home page video
    const videoData = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: SEO_CONFIG.site.fullName,
        description: SEO_CONFIG.summary.long,
        thumbnailUrl: [
            "https://www.alekgir.com/images/alekgir_logo.JPG"
        ],
        contentUrl: "https://www.alekgir.com/images/alekgir.mp4",
        uploadDate: "2024-01-01T08:00:00+00:00"
    };

    // ItemList schema for portfolio projects
    const portfolioData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "AlekGir Portfolio",
        description: "Full-Stack development projects and case studies",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.name,
            url: `https://www.alekgir.com/projects/${project.slug}`,
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
            />
        </>
    );
};

export default JsonLd;

