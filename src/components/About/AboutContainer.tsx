'use client';

/**
 * Container for About Section
 * Following Single Responsibility - only manages about container layout
 */

interface AboutContainerProps {
    children: React.ReactNode;
}

export default function AboutContainer({ children }: AboutContainerProps) {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center bg-transparent py-20 overflow-hidden"
        >
            {/* Content */}
            <div className="relative z-10 w-full">{children}</div>
        </section>
    );
}
