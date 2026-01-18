import React from "react";

import type { Project } from "@/types";

interface ProjectJsonLdProps {
    project: Project;
}

const ProjectJsonLd: React.FC<ProjectJsonLdProps> = ({ project }) => {
    // Main SoftwareApplication schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.name,
        description: project.fullDescription.replace(/\n\n/g, ' '),
        applicationCategory: project.category,
        operatingSystem: "Web",
        url: `https://www.alekgir.com/projects/${project.slug}`,
        // Add live URLs as sameAs references
        ...(project.liveUrls && project.liveUrls.length > 0 && {
            sameAs: project.liveUrls,
            installUrl: project.liveUrls[0],
        }),
        author: {
            "@type": "Person",
            name: "Aleksejs Giruckis",
            url: "https://www.alekgir.com",
            jobTitle: "Full-Stack Developer",
            sameAs: [
                "https://www.linkedin.com/in/aleksejs-giruckis-0569a7353",
                "https://github.com/AleksejsGir"
            ]
        },
        creator: {
            "@type": "Person",
            name: "Aleksejs Giruckis",
            url: "https://www.alekgir.com",
        },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            category: "Web Development Service",
        },
        featureList: project.features,
        keywords: [...project.frontend, ...project.backend, project.category].join(", "),
        ...(project.projectDuration && {
            dateCreated: project.videoUploadDate || "2024-01-01",
        }),
    };

    // WebPage schema for better SEO
    const webPageData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${project.name} - Case Study`,
        description: project.description,
        url: `https://www.alekgir.com/projects/${project.slug}`,
        isPartOf: {
            "@type": "WebSite",
            name: "AlekGir Portfolio",
            url: "https://www.alekgir.com"
        },
        about: {
            "@type": "SoftwareApplication",
            name: project.name,
        },
        mainEntity: {
            "@type": "CreativeWork",
            name: project.name,
            description: project.fullDescription.replace(/\n\n/g, ' '),
            creator: {
                "@type": "Person",
                name: "Aleksejs Giruckis"
            },
            ...(project.liveUrls && project.liveUrls.length > 0 && {
                url: project.liveUrls[0],
            }),
        },
        ...(project.liveUrls && project.liveUrls.length > 0 && {
            relatedLink: project.liveUrls,
        }),
    };

    // BreadcrumbList for navigation in search results
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.alekgir.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "https://www.alekgir.com/#projects",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: project.name,
                item: `https://www.alekgir.com/projects/${project.slug}`,
            },
        ],
    };

    // VideoObject schema if project has video
    const videoData = project.mockupImage.endsWith(".mp4")
        ? {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: `${project.name} - Project Demo`,
            description: project.description,
            thumbnailUrl: [
                project.videoThumbnail || "https://www.alekgir.com/images/alekgir_logo.JPG",
            ],
            contentUrl: `https://www.alekgir.com${project.mockupImage}`,
            embedUrl: `https://www.alekgir.com/projects/${project.slug}`,
            uploadDate: project.videoUploadDate || "2024-01-01T08:00:00+00:00",
            duration: "PT1M",
            publisher: {
                "@type": "Person",
                name: "Aleksejs Giruckis",
                url: "https://www.alekgir.com"
            }
        }
        : null;

    // TechArticle schema for implementation details
    const techArticleData = project.implementation && project.implementation.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: `${project.name} - Technical Implementation`,
            description: project.solution,
            author: {
                "@type": "Person",
                name: "Aleksejs Giruckis",
            },
            publisher: {
                "@type": "Person",
                name: "Aleksejs Giruckis",
                url: "https://www.alekgir.com"
            },
            mainEntityOfPage: `https://www.alekgir.com/projects/${project.slug}`,
            keywords: [...project.frontend, ...project.backend].join(", "),
            articleSection: project.category,
            proficiencyLevel: "Expert",
        }
        : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }}
            />
            {videoData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
                />
            )}
            {techArticleData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleData) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
        </>
    );
};

export default ProjectJsonLd;
