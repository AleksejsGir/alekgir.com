import React from "react";

import type { Project } from "@/types";

interface ProjectJsonLdProps {
    project: Project;
}

const ProjectJsonLd: React.FC<ProjectJsonLdProps> = ({ project }) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.name,
        description: project.fullDescription,
        applicationCategory: project.category,
        operatingSystem: "Web",
        url: `https://www.alekgir.com/projects/${project.slug}`,
        author: {
            "@type": "Person",
            name: "Aleksejs Giruckis",
            url: "https://www.alekgir.com",
            jobTitle: "Full-Stack Developer",
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
        keywords: [...project.frontend, ...project.backend].join(", "),
    };

    // Additional BreadcrumbList for better navigation in search results
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

    const videoData = project.mockupImage.endsWith(".mp4")
        ? {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: project.name,
            description: project.description,
            thumbnailUrl: [
                project.videoThumbnail || "https://www.alekgir.com/images/alekgir_logo.JPG",
            ],
            contentUrl: `https://www.alekgir.com${project.mockupImage}`,
            uploadDate: project.videoUploadDate || "2024-01-01T08:00:00+00:00",
        }
        : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            {videoData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
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
