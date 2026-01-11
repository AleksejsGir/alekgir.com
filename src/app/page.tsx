'use client';

import Navbar from '@/components/Navigation/Navbar';
import Hero from '@/components/Hero/Hero';
import ProjectsContainer from '@/components/Projects/ProjectsContainer';
import ProjectsGrid from '@/components/Projects/ProjectsGrid';
import ServicesSection from '@/components/Services/ServicesSection';

import ContactSection from '@/components/Contact/ContactSection';
import ContactContainer from '@/components/Contact/ContactContainer';
import Footer from '@/components/Footer/Footer';
import { projects } from '@/data/projects';

import dynamic from 'next/dynamic';

const CodeCompilationCanvas = dynamic(
  () => import('@/components/Backgrounds/CodeCompilationCanvas'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Global Ambient Background (Unified "Seamless Immersion") */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <CodeCompilationCanvas />
        {/* Subtle overlay using new palette */}
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <main className="min-h-screen relative z-10">
        <Hero /> {/* Hero is opaque/z-10, so it sits on top */}

        <ProjectsContainer>
          <ProjectsGrid projects={projects} />
        </ProjectsContainer>

        <ServicesSection />

        {/* AboutSection merged into ContactContainer - removed */}

        <ContactContainer>
          <ContactSection />
        </ContactContainer>

        <Footer />
      </main>
    </>
  );
}
