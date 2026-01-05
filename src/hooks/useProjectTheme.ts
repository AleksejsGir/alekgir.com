import { Project } from '@/types';

// Category-themed glow effects for each project
const projectThemes: Record<string, {
    glow1: string;
    glow2: string;
    bg: string;
    text: string;
}> = {
    'E-Commerce Solution': {
        glow1: 'from-purple-500/20',
        glow2: 'to-fuchsia-500/20',
        bg: 'bg-purple-500/20',
        text: 'text-purple-300',
    },
    'Content Platform': {
        glow1: 'from-blue-500/20',
        glow2: 'to-cyan-500/20',
        bg: 'bg-blue-500/20',
        text: 'text-blue-300',
    },
    'Automation & Bots': {
        glow1: 'from-sky-400/20',
        glow2: 'to-blue-500/20',
        bg: 'bg-sky-500/20',
        text: 'text-sky-300',
    },
    'Personal Branding': {
        glow1: 'from-teal-500/20',
        glow2: 'to-emerald-500/20',
        bg: 'bg-teal-500/20',
        text: 'text-teal-300',
    },
    'Software-as-a-Service': {
        glow1: 'from-emerald-500/20',
        glow2: 'to-teal-500/20',
        bg: 'bg-emerald-500/20',
        text: 'text-emerald-300',
    },
    'Social Community': {
        glow1: 'from-pink-500/20',
        glow2: 'to-orange-500/20',
        bg: 'bg-pink-500/20',
        text: 'text-pink-300',
    },
    'Property Management': {
        glow1: 'from-amber-500/20',
        glow2: 'to-yellow-500/20',
        bg: 'bg-amber-500/20',
        text: 'text-amber-300',
    },
    'Advanced Analytics': {
        glow1: 'from-violet-500/20',
        glow2: 'to-indigo-500/20',
        bg: 'bg-violet-500/20',
        text: 'text-violet-300',
    },
};

// Default theme fallback
const defaultTheme = {
    glow1: 'from-primary/20',
    glow2: 'to-primary/10',
    bg: 'bg-primary/20',
    text: 'text-primary-light',
};

export function useProjectTheme(category: string) {
    return projectThemes[category] || defaultTheme;
}
