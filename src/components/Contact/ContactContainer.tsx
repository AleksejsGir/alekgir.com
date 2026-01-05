'use client';

/**
 * Container for Contact Section
 * Following Single Responsibility - only manages contact container layout
 */

interface ContactContainerProps {
    children: React.ReactNode;
}

export default function ContactContainer({ children }: ContactContainerProps) {
    return (
        <section
            id="contact"
            className="relative bg-transparent py-20 overflow-hidden"
        >
            {/* Content */}
            <div className="relative z-10 w-full">{children}</div>
        </section>
    );
}
