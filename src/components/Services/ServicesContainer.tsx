'use client';

/**
 * Container for Services Section
 * Following Single Responsibility - only manages services container layout
 */

interface ServicesContainerProps {
    children: React.ReactNode;
}

export default function ServicesContainer({ children }: ServicesContainerProps) {
    return (
        <section
            id="services"
            className="relative min-h-screen flex items-center justify-center bg-transparent py-20 overflow-hidden"
        >
            {/* Content */}
            <div className="relative z-10 w-full">{children}</div>
        </section>
    );
}
