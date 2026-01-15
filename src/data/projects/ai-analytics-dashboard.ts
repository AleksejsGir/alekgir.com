import type { Project } from './types';

export const aiAnalyticsDashboard: Project = {
  id: 8,
  name: "AI-Powered Analytics Dashboard",
  category: "Advanced Analytics",
  slug: "ai-analytics-dashboard",
  description: "React analytics SPA with async FastAPI backend and AI service integration",
  fullDescription: "An advanced analytics single-page application leveraging React and async FastAPI. Features integration with AI services (OpenAI GPT-4, Google Gemini) for intelligent insights, data analysis with pandas and NumPy, interactive visualizations with Plotly and Chart.js, automated report generation with Celery, PostgreSQL for data warehousing, async API endpoints for data processing, and comprehensive REST API for external integrations.",
  challenge: "Creating an analytics platform that processes complex datasets efficiently, provides AI-powered insights for business decision-making, maintains high performance with large data volumes, and presents data through intuitive visualizations.",
  solution: "Built async FastAPI backend with Pydantic schemas for data validation. Integrated OpenAI and Google Gemini APIs with async HTTP clients. Used pandas for data processing in background tasks. Implemented Celery for scheduled report generation. Built React SPA with Plotly for interactive visualizations. Applied PostgreSQL with async queries. Deployed with Docker for scalability.",
  frontend: ["React 18", "TypeScript", "Plotly", "Chart.js", "Tailwind CSS", "Redux Toolkit"],
  backend: ["FastAPI", "Python (Async)", "PostgreSQL", "asyncpg", "Redis", "Celery", "pandas"],
  features: [
    "React SPA with TypeScript",
    "FastAPI async REST endpoints",
    "OpenAI & Gemini API integration",
    "pandas data processing",
    "Interactive Plotly charts",
    "Automated Celery reports",
    "CSV & Excel export",
    "JWT authentication"
  ],
  metrics: "AI-powered insights, async data processing, Plotly visualizations",
  mockupImage: "/projects/AI-Powered.mp4",
  videoThumbnail: "/images/alekgir_logo.JPG",
  videoUploadDate: "2024-01-13T08:00:00+00:00",
  projectDuration: "4 months",
  teamSize: "Solo Developer",

  implementation: [
    {
      title: "FastAPI Async Backend",
      description: "Built async REST API using FastAPI with async/await patterns for non-blocking data processing. Implemented Pydantic models for analytics data validation and transformation. Created async route handlers for data ingestion, analysis, and visualization endpoints. Used dependency injection for database sessions and AI service clients. Applied automatic OpenAPI documentation with interactive Swagger UI."
    },
    {
      title: "AI Services Integration",
      description: "Integrated OpenAI GPT-4 API using httpx async client for natural language analysis and insight generation. Implemented Google Gemini API for additional AI capabilities. Built prompt engineering system for effective business insights. Created rate limiting and response caching with Redis to manage API costs. Applied error handling with fallback mechanisms. Used asyncio for parallel AI requests improving response time."
    },
    {
      title: "Data Processing with pandas",
      description: "Implemented data analysis pipeline using pandas for efficient data manipulation and transformation. Created Celery tasks for heavy data processing to avoid blocking API requests. Built aggregation functions for business metrics calculation. Applied time-series analysis for trend detection. Implemented data export functionality to CSV and Excel formats. Optimized memory usage with chunked data processing for large datasets."
    },
    {
      title: "React SPA with Plotly Visualizations",
      description: "Built single-page application with React 18 and TypeScript for type safety. Integrated Plotly.js for interactive data visualizations (scatter, line, bar, heatmap charts). Implemented Redux Toolkit for state management with analytics data. Used RTK Query for API data fetching with caching. Created responsive chart layouts with Tailwind CSS. Built drill-down functionality for detailed analysis."
    },
    {
      title: "Automated Reporting with Celery",
      description: "Implemented Celery for async task processing and scheduled report generation. Created periodic tasks with Celery beat for daily/weekly/monthly automated reports. Built PDF report generation using ReportLab with custom templates. Implemented email delivery system with SMTP for report distribution. Applied task result tracking and error handling with proper logging. Used Redis as Celery broker and result backend."
    },
    {
      title: "Database & Performance",
      description: "Configured PostgreSQL with asyncpg driver for async database operations. Implemented SQLAlchemy 2.0 with async support for analytics data models. Created database views for complex aggregations. Applied query optimization with proper indexing on analytics tables. Implemented Redis caching for frequently accessed analytics data. Achieved query response times under 500ms with optimization and caching."
    }
  ],

  keyResults: [
    "Successfully integrated OpenAI and Google Gemini APIs with async clients",
    "Built efficient data processing pipeline with pandas and Celery",
    "Created interactive visualizations with Plotly and React",
    "Implemented automated reporting system with scheduled Celery tasks",
    "Achieved fast query performance with async PostgreSQL and Redis caching",
    "Deployed scalable async FastAPI solution with Docker"
  ]
};
