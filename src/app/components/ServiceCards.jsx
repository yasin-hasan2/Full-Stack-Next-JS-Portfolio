"use client";

import { motion } from "framer-motion";
import { Code, Palette, Layers } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Full-stack web applications with modern technologies and best practices. From concept to deployment.",
    icon: Code,
    link: "/portfolio/web-development",
    projects: "25+ Projects",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive and engaging digital experiences.",
    icon: Palette,
    link: "/portfolio/ui-ux-design",
    projects: "15+ Projects",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Creative visual solutions including branding, logos, and marketing materials that make an impact.",
    icon: Layers,
    link: "/portfolio/graphic-design",
    projects: "20+ Projects",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Link href={service.link}>
              <div
                className={`${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full cursor-pointer`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Projects Count */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {service.projects}
                  </span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 45 }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
