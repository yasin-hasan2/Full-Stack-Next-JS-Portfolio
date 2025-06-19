"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const successfulWebsites = [
  {
    id: 1,
    title: "FlavorCrave Restaurant",
    description:
      "A comprehensive MERN stack restaurant platform with online ordering, real-time tracking, and payment integration. Features include menu management, order processing, and customer analytics.",
    image: "https://i.ibb.co.com/Mf6Zr5Q/bangla-restaurant-83eb9-web-app-2.png",
    liveUrl: "https://bangla-restaurant-83eb9.web.app/",
    githubUrl: "https://github.com/yasin-hasan2/bangla-resturent.git",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    status: "Live & Active",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with product catalog, shopping cart, secure checkout, and admin dashboard. Includes inventory management and sales analytics.",
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yasin-hasan2/ecommerce-platform",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    status: "Live & Active",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting. Built for modern teams and workflows.",
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://taskmanager-pro.com",
    githubUrl: "https://github.com/yasin-hasan2/task-manager",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    status: "Live & Active",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description:
      "Content management system specifically designed for creative professionals. Features drag-and-drop portfolio builder and client management tools.",
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://portfolio-cms.dev",
    githubUrl: "https://github.com/yasin-hasan2/portfolio-cms",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
    status: "Live & Active",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successfulWebsites.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % successfulWebsites.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + successfulWebsites.length) % successfulWebsites.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
              <img
                src={
                  successfulWebsites[currentIndex].image ||
                  "/placeholder.svg?height=400&width=600"
                }
                alt={successfulWebsites[currentIndex].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=400&width=600";
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full font-medium">
                  {successfulWebsites[currentIndex].status}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-8 flex flex-col justify-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {successfulWebsites[currentIndex].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                {successfulWebsites[currentIndex].description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <div className="flex flex-wrap gap-2">
                  {successfulWebsites[currentIndex].technologies.map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <a
                  href={successfulWebsites[currentIndex].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </a>
                <a
                  href={successfulWebsites[currentIndex].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {successfulWebsites.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-orange-500 w-8"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
