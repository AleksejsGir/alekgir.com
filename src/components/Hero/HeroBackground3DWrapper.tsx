'use client';

import dynamic from 'next/dynamic';

// Dynamic import for SSR safety
const HeroBackground3D = dynamic(
    () => import('./HeroBackground3D'),
    {
        ssr: false,
        loading: () => (
            <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
        )
    }
);

export default HeroBackground3D;
