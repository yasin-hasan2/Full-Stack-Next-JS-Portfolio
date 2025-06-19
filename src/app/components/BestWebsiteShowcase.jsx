"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Award, Star } from "lucide-react";

const bestWebsites = [
  {
    id: 1,
    title: "FlavorCrave - Restaurant Platform",
    description:
      "Award-winning restaurant management system with advanced features including real-time order tracking, inventory management, and customer analytics. Built with MERN stack and modern UI/UX principles.",
    image: "https://i.ibb.co.com/Mf6Zr5Q/bangla-restaurant-83eb9-web-app-2.png",
    liveUrl: "https://bangla-restaurant-83eb9.web.app/",
    githubUrl: "https://github.com/yasin-hasan2/bangla-resturent.git",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "Stripe",
      "Socket.io",
    ],
    achievements: [
      "Best UI/UX Design 2024",
      "Most Innovative Solution",
      "Client Choice Award",
    ],
    stats: {
      users: "10K+",
      orders: "50K+",
      rating: "4.9",
    },
  },
  {
    id: 2,
    title: "EcoCommerce - Sustainable Shopping",
    description:
      "Revolutionary e-commerce platform focused on sustainable products with carbon footprint tracking, eco-friendly shipping options, and green rewards program.",
    image: "/placeholder.svg?height=500&width=800",
    liveUrl: "https://ecocommerce-demo.com",
    githubUrl: "https://github.com/yasin-hasan2/ecocommerce",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "AWS",
    ],
    achievements: [
      "Green Tech Award 2024",
      "Sustainability Excellence",
      "Innovation Prize",
    ],
    stats: {
      users: "25K+",
      products: "100K+",
      rating: "4.8",
    },
  },
];

export default function BestWebsiteShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Project Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
          {bestWebsites.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeProject === index
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-orange-500"
              }`}
            >
              Project {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={
                  bestWebsites[activeProject].image ||
                  "/placeholder.svg?height=500&width=800"
                }
                alt={bestWebsites[activeProject].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=500&width=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Users
                  </div>
                  <div className="text-lg font-bold text-orange-500">
                    {bestWebsites[activeProject].stats.users}
                  </div>
                </div>
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Rating
                  </div>
                  <div className="text-lg font-bold text-orange-500 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    {bestWebsites[activeProject].stats.rating}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Title and Description */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {bestWebsites[activeProject].title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {bestWebsites[activeProject].description}
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                Achievements
              </h4>
              <div className="space-y-2">
                {bestWebsites[activeProject].achievements.map(
                  (achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {bestWebsites[activeProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 text-orange-800 dark:text-orange-300 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={bestWebsites[activeProject].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Site
              </a>
              <a
                href={bestWebsites[activeProject].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-medium"
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
