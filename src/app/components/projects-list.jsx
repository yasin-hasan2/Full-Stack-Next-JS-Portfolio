"use client";

import React, { useState } from "react";

const categories = ["All", "Web Design", "Development", "UI/UX"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function allProjectsList({ allProjects }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = allProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );
  return (
    <div>
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
          <Link href={`/portfolio/${project.id}`} key={index}>
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border p-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project?.images || "/placeholder.svg"}
                alt={project?.project_name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {project?.project_name}
                  </h3>
                  <p>{project?.category}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
