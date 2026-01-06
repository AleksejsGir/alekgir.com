/**
 * Service Registry
 * Maps service flow component names to dynamic imports
 * Follows Open/Closed Principle - add new services without modifying existing code
 * Follows Dependency Inversion Principle - depends on abstraction (ComponentType)
 */

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

/**
 * Flow component props interface
 */
export interface FlowComponentProps {
  embedded?: boolean;
}

/**
 * Registry entry type
 */
interface ServiceFlowEntry {
  component: ComponentType<FlowComponentProps>;
  displayName: string;
}

/**
 * Helper function to create dynamically imported flow components
 * Centralizes dynamic import configuration (DRY principle)
 *
 * Next.js requires object literal for static analysis, so we return
 * the result of dynamic() with inline options rather than passing options as parameter
 */
const createFlowComponent = (
  importFn: () => Promise<{ default: ComponentType<FlowComponentProps> }>
): ComponentType<FlowComponentProps> => {
  return dynamic(importFn, { ssr: false });
};

/**
 * Service Flow Registry
 * Centralized mapping of flow component names to dynamic imports
 *
 * Benefits:
 * - Single source of truth for flow component configuration
 * - DRY: import options centralized in createFlowComponent helper
 * - Easy to add new flows without code duplication
 *
 * To add a new service flow:
 * 1. Create the flow component in src/components/Services/flows/
 * 2. Add entry to this registry using createFlowComponent
 * 3. Add service to src/data/services.ts with flowComponent name
 */
export const SERVICE_FLOW_REGISTRY: Record<string, ServiceFlowEntry> = {
  FullStackFlow: {
    component: createFlowComponent(() => import('@/components/Services/flows/FullStackFlow')),
    displayName: 'Full-Stack Development Flow'
  },
  TelegramBotsFlow: {
    component: createFlowComponent(() => import('@/components/Services/flows/TelegramBotsFlow')),
    displayName: 'Telegram Bots Flow'
  },
  AIAutomationFlow: {
    component: createFlowComponent(() => import('@/components/Services/flows/AIAutomationFlow')),
    displayName: 'AI & Automation Flow'
  },
  APIDevFlow: {
    component: createFlowComponent(() => import('@/components/Services/flows/APIDevFlow')),
    displayName: 'API Development Flow'
  },
  DatabaseDevOpsFlow: {
    component: createFlowComponent(() => import('@/components/Services/flows/DatabaseDevOpsFlow')),
    displayName: 'Database & DevOps Flow'
  },
  UIUXFlow: {
    component: createFlowComponent(() => import('@/components/Services/flows/UIUXFlow')),
    displayName: 'UI/UX Flow'
  },
  PaymentFlow: {
    component: createFlowComponent(() => import('@/components/Services/flows/PaymentFlow')),
    displayName: 'Payment Integration Flow'
  },
  WebSocketFlow: {
    component: createFlowComponent(() => import('@/components/Services/flows/WebSocketFlow')),
    displayName: 'WebSocket Flow'
  },
};

/**
 * Get flow component by name
 * Returns null if not found (graceful degradation)
 */
export const getFlowComponent = (flowComponentName: string): ComponentType<FlowComponentProps> | null => {
  const entry = SERVICE_FLOW_REGISTRY[flowComponentName];
  return entry ? entry.component : null;
};

/**
 * Check if flow component exists in registry
 */
export const hasFlowComponent = (flowComponentName: string): boolean => {
  return flowComponentName in SERVICE_FLOW_REGISTRY;
};
