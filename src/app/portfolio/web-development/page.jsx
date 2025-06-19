"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Link from "next/link";

const webProjects = [
  {
    id: 1,
    title: "FlavorCrave Restaurant Platform",
    description:
      "Full-stack MERN application for restaurant management with real-time order tracking, payment integration, and admin dashboard.",
    image: "https://i.ibb.co.com/Mf6Zr5Q/bangla-restaurant-83eb9-web-app-2.png",
    liveUrl: "https://bangla-restaurant-83eb9.web.app/",
    githubUrl: "https://github.com/yasin-hasan2/bangla-resturent.git",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    category: "Full Stack",
    date: "2024",
    status: "Live",
    features: [
      "Real-time Orders",
      "Payment Gateway",
      "Admin Panel",
      "User Authentication",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with advanced product filtering, shopping cart, and secure checkout process.",
    image: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yasin-hasan2/ecommerce",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    category: "Full Stack",
    date: "2024",
    status: "Live",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Processing",
      "Order Management",
    ],
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description:
      "Collaborative project management tool with team features, real-time updates, and advanced reporting.",
    image: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/yasin-hasan2/task-manager",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    category: "Frontend",
    date: "2023",
    status: "Live",
    features: [
      "Team Collaboration",
      "Real-time Updates",
      "Task Tracking",
      "Analytics",
    ],
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals with drag-and-drop portfolio builder.",
    image: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://portfolio-cms.dev",
    githubUrl: "https://github.com/yasin-hasan2/portfolio-cms",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
    category: "Full Stack",
    date: "2023",
    status: "Live",
    features: [
      "Drag & Drop Builder",
      "Client Management",
      "Media Library",
      "SEO Optimization",
    ],
  },
  {
    id: 5,
    title: "Weather Analytics App",
    description:
      "Advanced weather application with data visualization, forecasting, and location-based services.",
    image: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://weather-analytics.com",
    githubUrl: "https://github.com/yasin-hasan2/weather-app",
    technologies: ["React", "D3.js", "Node.js", "Weather API"],
    category: "Frontend",
    date: "2023",
    status: "Live",
    features: [
      "Data Visualization",
      "Weather Forecasting",
      "Location Services",
      "Historical Data",
    ],
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "Comprehensive social media management platform with analytics, scheduling, and engagement tools.",
    image: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://social-dashboard.com",
    githubUrl: "https://github.com/yasin-hasan2/social-dashboard",
    technologies: ["Angular", "Node.js", "MongoDB", "Social APIs"],
    category: "Full Stack",
    date: "2022",
    status: "Live",
    features: [
      "Post Scheduling",
      "Analytics",
      "Multi-platform",
      "Team Management",
    ],
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function WebDevelopment() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = webProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="p-8 md:p-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Development
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Crafting modern, scalable, and user-friendly web applications using
            cutting-edge technologies and best practices.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-orange-500 shadow-md hover:shadow-lg"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=300&width=400"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=400";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Live"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                        +{project.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-300">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">
              Happy Clients
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-300">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
