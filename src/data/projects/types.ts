/**
 * Project Data Types
 * Following Single Responsibility Principle - type definitions only
 */

export interface ProjectImplementation {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  category: string;
  slug: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  frontend: string[];
  backend: string[];
  features: string[];
  metrics?: string;
  mockupImage: string;
  videoThumbnail?: string;
  videoUploadDate?: string;
  projectDuration?: string;
  teamSize?: string;
  implementation?: ProjectImplementation[];
  keyResults?: string[];
}
