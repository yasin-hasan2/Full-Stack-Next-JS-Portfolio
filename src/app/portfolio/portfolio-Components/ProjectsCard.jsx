"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

const categories = [
  "All",
  "Web Development",
  "E-commerce",
  "UI/UX",
  "SEO",
  "Digital Marketing",
  "Graphic Design",
  "Mobile Apps",
  "Branding",
  "Other",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectsCard({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const visibleCategories = categories.slice(0, 3);
  const hiddenCategories = categories.slice(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = (projects || []).filter(
    (project) =>
      (activeCategory === "All" || project.category === activeCategory) &&
      project.website_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 lg:py-10 relative">
      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search projects..."
          className="px-4 py-2 border rounded-lg w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex flex-col gap-4 w-full items-center justify-center h-64 sm:h-96">
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent text-[#FAAC15] text-2xl sm:text-4xl animate-spin flex items-center justify-center border-t-[#FAAC15] rounded-full">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent text-[#F97715] text-lg sm:text-2xl animate-spin flex items-center justify-center border-t-[#F97715] rounded-full"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Category Filter Buttons */}
          <div className="flex gap-2 px-2 py-3  whitespace-nowrap  rounded-lg sm:justify-center mb-6 relative z-20">
            {visibleCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={classNames(
                  "px-4 py-2 text-sm sm:text-base rounded-lg transition-all flex-shrink-0",
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                )}
              >
                {category}
              </button>
            ))}
            {hiddenCategories.length > 0 && (
              <div className="relative">
                <Menu as="div" className="inline-block text-left ">
                  <Menu.Button className="px-4 py-2 text-sm sm:text-base rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300">
                    More
                  </Menu.Button>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white/30 backdrop-blur-md divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      {hiddenCategories.map((category) => (
                        <Menu.Item key={category}>
                          {({ active }) => (
                            <button
                              onClick={() => setActiveCategory(category)}
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm w-full text-left text-gray-900`}
                            >
                              {category}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <img
                      src={project?.website_thumbnail || "/placeholder.svg"}
                      alt={project?.website_name}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                          {project?.website_name}
                        </h3>
                        <p className="text-sm sm:text-base">
                          {project?.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-1 sm:col-span-2 lg:col-span-3">
                No projects found.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
