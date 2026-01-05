'use client';

interface SectionWidthWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionWidthWrapper({ children, className = '' }: SectionWidthWrapperProps) {
    return (
        <div className={`max-w-[95vw] 2xl:max-w-screen-2xl mx-auto ${className}`}>
            {children}
        </div>
    );
}
