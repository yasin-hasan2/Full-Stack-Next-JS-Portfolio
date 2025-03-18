"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const categories = ["All", "Web Design", "Development", "UI/UX"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectsCard({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Simulate loading for 3 seconds before displaying data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Ensure projects is always an array to prevent crashes
  const filteredProjects = (projects || []).filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>

      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col gap-4 w-full items-center justify-center h-96">
          <div className="w-20 h-20 border-4 border-transparent text-[#FAAC15] text-4xl animate-spin flex items-center justify-center border-t-[#FAAC15] rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-[#F97715] text-2xl animate-spin flex items-center justify-center border-t-[#F97715] rounded-full"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Category Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={classNames(
                  "px-4 py-2 rounded-lg transition-all",
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <Link
                  href={`/portfolio/${project._id}`}
                  key={project._id}
                  passHref
                >
                  <div
                    className="group relative overflow-hidden rounded-lg border p-2 cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Project Thumbnail */}
                    <img
                      src={project?.website_thumbnail || "/placeholder.svg"}
                      alt={project?.website_name}
                      className="w-full h-64 object-cover rounded-lg transition-transform transform group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl font-semibold mb-2">
                          {project?.website_name}
                        </h3>
                        <p>{project?.category}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No projects found.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
