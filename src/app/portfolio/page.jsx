"use client";

import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";
import ServiceCards from "../components/ServiceCards";
import BestWebsiteShowcase from "../components/BestWebsiteShowcase";
import YouTubeSection from "../components/YouTubeSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="p-8 md:p-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my journey through successful projects, diverse services,
            and award-winning websites that showcase my passion for creating
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Section 1: Successful Websites Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Successful Websites
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Live projects that are making a real impact in the digital world
            </p>
          </div>
          <ProjectCarousel />
        </motion.section>

        {/* Section 2: Service Cards */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>
          <ServiceCards />
        </motion.section>

        {/* Section 3: Best Website Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Award-winning projects that define excellence in web development
            </p>
          </div>
          <BestWebsiteShowcase />
        </motion.section>

        {/* Section 4: YouTube Videos */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <YouTubeSection />
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's collaborate and bring your vision to life with cutting-edge
              technology and creative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-orange-500 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="/about"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-orange-500 transition-all duration-300"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
