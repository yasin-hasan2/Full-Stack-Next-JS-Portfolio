"use client";

import { useState } from "react";
// import { classNames } from "@/lib/utils";

const categories = ["All", "Web Design", "Development", "UI/UX"];

const projects = [
  {
    title: "Project 1",
    category: "Web Design",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Project 2",
    category: "Development",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Project 3",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=400",
  },
  // Add more projects as needed
];

// Helper function to join classnames
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
        Portfolio
      </h1>

      <div className="flex space-x-4 mb-8" data-aos="fade-up">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={classNames(
              "px-4 py-2 rounded-lg transition-colors",
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
