'use client';

import { motion } from 'framer-motion';
import { slideUpVariants } from '@/lib/animations';
import dynamic from 'next/dynamic';
import ProjectStyleCard from '@/components/shared/ui/ProjectStyleCard';

const FullStackFlow = dynamic(() => import('./flows/FullStackFlow'), { ssr: false });
const TelegramBotsFlow = dynamic(() => import('./flows/TelegramBotsFlow'), { ssr: false });
const AIAutomationFlow = dynamic(() => import('./flows/AIAutomationFlow'), { ssr: false });
const APIDevFlow = dynamic(() => import('./flows/APIDevFlow'), { ssr: false });
const DatabaseDevOpsFlow = dynamic(() => import('./flows/DatabaseDevOpsFlow'), { ssr: false });
const UIUXFlow = dynamic(() => import('./flows/UIUXFlow'), { ssr: false });
const PaymentFlow = dynamic(() => import('./flows/PaymentFlow'), { ssr: false });
const WebSocketFlow = dynamic(() => import('./flows/WebSocketFlow'), { ssr: false });

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tags: string[];
  size?: 'large' | 'medium' | 'small';
  gradient?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  tags,
  size = 'small',
  gradient = 'from-primary/20 to-purple-500/20'
}: ServiceCardProps) {
  const getDiagramComponent = () => {
    const embeddedProps = { embedded: true };

    switch (title) {
      case 'Full-Stack Development':
        return <FullStackFlow {...embeddedProps} />;
      case 'Telegram Bots':
        return <TelegramBotsFlow {...embeddedProps} />;
      case 'AI & Automation':
        return <AIAutomationFlow {...embeddedProps} />;
      case 'API Development':
        return <APIDevFlow {...embeddedProps} />;
      case 'Database & DevOps':
        return <DatabaseDevOpsFlow {...embeddedProps} />;
      case 'Modern UI/UX':
        return <UIUXFlow {...embeddedProps} />;
      case 'Payment Integration':
        return <PaymentFlow {...embeddedProps} />;
      case 'Real-time & WebSockets':
        return <WebSocketFlow {...embeddedProps} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={slideUpVariants}
      className="h-full hover:-translate-y-1 transition-transform duration-500"
    >
      <ProjectStyleCard
        className="h-full"
        contentClassName="h-full flex flex-col"
      >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient} blur-xl pointer-events-none z-0`} />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-col w-full p-4 sm:p-5 md:p-6 pb-3 md:pb-4 flex-grow">
            <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500 w-12 sm:w-14 h-12 sm:h-14 mb-3 sm:mb-4">
              <Icon className="text-primary group-hover:text-white transition-colors duration-300 w-6 sm:w-7 h-6 sm:h-7" />
            </div>

            <h3 className="font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-400 transition-all duration-300 text-lg sm:text-xl lg:text-2xl mb-2">
              {title}
            </h3>

            <p className="text-text-secondary mb-3 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white/70 bg-white/5 rounded-full border border-white/5 group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-white/50">
                  +{tags.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden mt-auto hidden lg:block">
            <div className="w-full h-full">
              {getDiagramComponent()}
            </div>
          </div>
        </div>
      </ProjectStyleCard>
    </motion.div>
  );
}
