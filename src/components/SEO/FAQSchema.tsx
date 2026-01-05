import React from "react";
import { SEO_CONFIG } from "@/config/seo.config";

/**
 * FAQ Schema Component
 * Helps website appear in Google Rich Results
 * Follows Single Responsibility Principle - only handles FAQ structured data
 */
const FAQSchema = () => {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What technologies does Aleksejs Giruckis specialize in?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Aleksejs Giruckis is a Full-Stack Developer specializing in Python, Django, React, Next.js, TypeScript, and PostgreSQL. He has ${SEO_CONFIG.achievements.yearsExperience} years of production experience with these technologies.`
                }
            },
            {
                "@type": "Question",
                name: "Where is Aleksejs Giruckis located?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Aleksejs is based in ${SEO_CONFIG.location.region}, ${SEO_CONFIG.location.country}. He is available for remote work and positions throughout the UK.`
                }
            },
            {
                "@type": "Question",
                name: "What is Aleksejs Giruckis's certification score?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Aleksejs achieved a ${SEO_CONFIG.achievements.certificationScore} European certification score from ${SEO_CONFIG.structuredData.education.institution} in ${SEO_CONFIG.structuredData.education.program}, completing ${SEO_CONFIG.structuredData.education.hours} intensive hours of training.`
                }
            },
            {
                "@type": "Question",
                name: "How many projects has Aleksejs Giruckis delivered?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Aleksejs has successfully delivered ${SEO_CONFIG.achievements.projectsDelivered} client projects, including Django web applications, React/Next.js frontends, REST APIs, and Telegram bot solutions.`
                }
            },
            {
                "@type": "Question",
                name: "Does Aleksejs Giruckis have UK work authorization?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Yes, Aleksejs has ${SEO_CONFIG.structuredData.workAuthorization}. He is a Latvian citizen with full right to work in the United Kingdom.`
                }
            },
            {
                "@type": "Question",
                name: "What services does Aleksejs Giruckis offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aleksejs offers Django web development, React/Next.js application development, REST API development, Telegram bot development, database design with PostgreSQL, and full-stack development services."
                }
            },
            {
                "@type": "Question",
                name: "What is Aleksejs Giruckis's approach to code quality?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Aleksejs follows Test-Driven Development (TDD) practices with ${SEO_CONFIG.achievements.testCoverage} test coverage standard, Clean Architecture principles, and modern DevOps practices including Docker and CI/CD pipelines.`
                }
            },
            {
                "@type": "Question",
                name: "How can I contact Aleksejs Giruckis?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `You can contact Aleksejs via email at ${SEO_CONFIG.contact.email}, phone at ${SEO_CONFIG.contact.phone}, or through LinkedIn at ${SEO_CONFIG.contact.linkedin}.`
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
};

export default FAQSchema;
