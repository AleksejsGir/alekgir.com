import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectJsonLd from "@/components/SEO/ProjectJsonLd";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.name,
        description: project.fullDescription,
        keywords: [...project.frontend, ...project.backend, project.category],
        openGraph: {
            title: `${project.name} | AlekGir`,
            description: project.description,
            type: "article",
            url: `https://alekgir.com/projects/${project.slug}`,
            images: [
                {
                    url: "/images/alekgir_logo.JPG",
                    width: 1200,
                    height: 630,
                    alt: project.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.name} | AlekGir`,
            description: project.description,
            images: ["/images/alekgir_logo.JPG"],
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <ProjectJsonLd project={project} />

            <main className="min-h-screen bg-background text-white selection:bg-cyan-500/30">

                <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                    <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-white/[0.05]" />
                    <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between relative z-10">
                        <Link
                            href="/#projects"
                            className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm tracking-wide">Back to Portfolio</span>
                        </Link>
                        <span className="px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                            {project.category}
                        </span>
                    </div>
                </header>

                <div className="relative min-h-screen pt-16">

                    <div className="relative lg:fixed lg:left-0 lg:top-16 lg:bottom-0 w-full lg:w-[45%] h-[40vh] lg:h-[calc(100vh-4rem)] overflow-hidden bg-black z-10">
                        {project.mockupImage?.endsWith('.mp4') ? (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-90"
                            >
                                <source src={project.mockupImage} type="video/mp4" />
                            </video>
                        ) : (
                            <div className="relative w-full h-full">
                                <Image
                                    src={project.mockupImage || ''}
                                    alt={project.name}
                                    fill
                                    className="object-cover opacity-90"
                                />
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background" />

                        <div className="absolute top-6 left-6 z-10">
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 backdrop-blur-md bg-cyan-500/80 text-white shadow-lg shadow-cyan-500/20">
                                {project.category}
                            </span>
                        </div>

                        {(project.projectDuration || project.teamSize) && (
                            <div className="absolute bottom-6 left-6 z-10 space-y-2">
                                {project.projectDuration && (
                                    <div className="flex items-center gap-2 text-sm backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-lg border border-white/10">
                                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-white/90 font-medium">{project.projectDuration}</span>
                                    </div>
                                )}
                                {project.teamSize && (
                                    <div className="flex items-center gap-2 text-sm backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-lg border border-white/10">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="text-white/90 font-medium">{project.teamSize}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="w-full lg:w-[55%] lg:ml-[45%] bg-background">
                        <div className="p-6 md:p-10 lg:p-12 xl:p-16 space-y-12">

                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-tight">
                                    {project.name}
                                </h1>
                                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-3xl">
                                    {project.fullDescription}
                                </p>
                            </div>

                            {project.metrics && (
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4 hover:border-cyan-500/20 transition-all">
                                    <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Key Result</div>
                                        <div className="text-2xl md:text-3xl font-black text-white">{project.metrics}</div>
                                    </div>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-red-500/20 transition-colors">
                                    <h3 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500" /> Challenge
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                        {project.challenge}
                                    </p>
                                </div>

                                <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Solution
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>

                            {project.implementation && project.implementation.length > 0 && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                        <span className="w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
                                        Implementation Details
                                    </h2>
                                    <div className="grid gap-6">
                                        {project.implementation.map((item, index) => (
                                            <div
                                                key={index}
                                                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-mono font-bold text-sm border border-indigo-500/20">
                                                        {(index + 1).toString().padStart(2, '0')}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.keyResults && project.keyResults.length > 0 && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                        <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                        Key Results & Impact
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {project.keyResults.map((result, index) => (
                                            <div
                                                key={index}
                                                className="group p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all flex items-start gap-3"
                                            >
                                                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    {result}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="grid lg:grid-cols-12 gap-8">
                                <div className="lg:col-span-7 space-y-4">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-widest">Key Features</h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                                <span className="text-gray-400 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-5 space-y-6">
                                    <div>
                                        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Frontend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.frontend.map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-xs font-medium text-cyan-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-3">Backend & Infra</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.backend.map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 bg-purple-500/5 border border-purple-500/20 rounded-lg text-xs font-medium text-purple-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-4 border-t border-white/10 space-y-4">
                                <h3 className="text-2xl font-bold text-white mb-6">Ready to Build Something Similar?</h3>
                                <Link
                                    href="/#contact"
                                    className="w-full py-5 rounded-2xl font-bold text-white shadow-xl flex items-center justify-center gap-3 group transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-cyan-500/30"
                                >
                                    <span className="text-lg">Discuss Your Project</span>
                                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="h-8" />
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
