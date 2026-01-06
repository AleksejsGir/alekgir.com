import type { Project } from './types';

export const realEstatePlatform: Project = {
  id: 7,
  name: "Real Estate Platform",
  category: "Property Management",
  slug: "real-estate-platform",
  description: "React SPA real estate platform with Django REST API and PostGIS geospatial search",
  fullDescription: "A comprehensive real estate single-page application built with React and Django REST Framework. Features advanced property search with multiple filters, PostgreSQL PostGIS integration for geospatial queries and map visualization, Google Maps API integration, virtual tour capabilities, agent management system, saved favorites and comparisons, booking system for property viewings, and detailed analytics dashboard.",
  challenge: "Building a user-friendly real estate platform that handles large property datasets with complex geospatial search criteria, provides rich media experiences for virtual tours, and maintains fast performance across all devices.",
  solution: "Implemented Django REST Framework API with PostGIS extension for geospatial capabilities. Built React SPA with TypeScript for type-safe frontend. Integrated Google Maps JavaScript API for interactive visualization. Applied PostgreSQL full-text search combined with spatial queries. Used Redis caching for frequently accessed listings. Optimized with proper database indexing.",
  frontend: ["React 18", "TypeScript", "Google Maps API", "Tailwind CSS", "Redux Toolkit"],
  backend: ["Django REST Framework", "PostgreSQL", "PostGIS", "Redis", "Celery"],
  features: [
    "React SPA with TypeScript",
    "Django REST API with PostGIS",
    "Geospatial radius search",
    "Google Maps integration",
    "Virtual tours (360° images)",
    "Agent profiles & management",
    "Booking system for viewings",
    "Property comparison tool"
  ],
  metrics: "PostGIS geospatial queries, < 2s search time, REST API",
  mockupImage: "/projects/Real_Estate.mp4",
  projectDuration: "3.5 months",
  teamSize: "Solo Developer",

  implementation: [
    {
      title: "Django REST API with PostGIS",
      description: "Built RESTful API using Django REST Framework with ViewSets for property CRUD operations. Configured PostgreSQL with PostGIS extension for geospatial capabilities. Created Django models with GeoDjango's PointField for property locations. Implemented serializers with geospatial field support. Applied custom API endpoints for radius search using PostGIS functions (ST_DWithin, ST_Distance)."
    },
    {
      title: "Geospatial Search Implementation",
      description: "Implemented radius-based property search using PostGIS spatial queries. Built distance calculation endpoints returning properties within specified kilometers. Created custom Django filters combining geospatial and traditional filters (price, bedrooms, type). Applied spatial indexes (GIST) on PointField for query optimization. Used Django Q objects for complex query composition with location, price, and amenities."
    },
    {
      title: "React SPA with Google Maps",
      description: "Built single-page application with React 18 and TypeScript. Integrated Google Maps JavaScript API for interactive property visualization. Implemented custom map markers with property previews. Created map clustering for dense areas with marker-clusterer-plus. Built search area drawing tools for polygon-based filtering. Applied geocoding API for address to coordinates conversion in search forms."
    },
    {
      title: "Property Management & Media",
      description: "Created Django REST API endpoints for property listings with image galleries. Implemented DRF serializers for nested property data including amenities and agent info. Built image upload handling with Django's FileField and S3-compatible storage. Created 360° virtual tour integration with iframe embedding. Applied image optimization with Pillow for thumbnail generation. Implemented pagination for property lists."
    },
    {
      title: "Booking System with Celery",
      description: "Built property viewing booking system with availability calendar. Implemented Django REST endpoints for booking creation and management. Created Celery tasks for async email notifications to agents and users. Applied timezone handling with Django's timezone utilities. Built booking confirmation workflow with email templates. Implemented reminder notifications 24 hours before scheduled viewings using Celery beat."
    },
    {
      title: "Testing & Performance",
      description: "Maintained test coverage with Django REST Framework's APITestCase. Tested geospatial queries with PostGIS test database. Created React component tests with Jest and Testing Library. Applied database query optimization using select_related and prefetch_related. Implemented Redis caching for property listings reducing response time by 65%. Optimized React with code splitting and lazy loading."
    }
  ],

  keyResults: [
    "Implemented efficient geospatial search with PostgreSQL PostGIS",
    "Achieved under 2 seconds search response time with optimization",
    "Built comprehensive filtering combining spatial and traditional queries",
    "Integrated Google Maps API for interactive property visualization",
    "Created booking system with automated notifications via Celery",
    "Deployed scalable REST API with proper caching and indexing"
  ]
};
