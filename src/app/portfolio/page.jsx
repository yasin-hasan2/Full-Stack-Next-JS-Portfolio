"use client";

import Link from "next/link";
import { useState } from "react";
// import { classNames } from "@/lib/utils";

const categories = ["All", "Web Design", "Development", "UI/UX"];

const projects = [
  {
    id: 1,
    project_name: "Luxe Stay Retreat",
    category: "UI/UX",
    description:
      "A MERN Stack Restaurant website, simplifies Online food buying system. Personalized plans, and . Start today for a better tomorrow. AdminId: Admin02@gmail.com , pass : Admin2@ ",
    project_thumnail:
      "https://i.ibb.co.com/fBqQdGh/luxe-stay-retreat-1hod-vercel-app.png",
    images:
      "https://img.freepik.com/free-vector/nothern-lights-landing-page_23-2148280855.jpg",
    technology: [
      "React",
      "Tailwinds",
      "Jwt",
      "Node",
      "MongoDB",
      "ExpressJs",
      "Firebase",
      "TanStack Query",
      "vercel",
      "Many More...",
    ],
    project_source: [
      {
        client_github_link:
          "https://github.com/yasin-hasan2/LuxeStayRetreat/tree/main/client",
      },
      {
        server_github_link:
          "https://github.com/yasin-hasan2/LuxeStayRetreat.git",
      },
      {
        live_link: "https://stay-vista-b6877.web.app/",
      },
    ],
  },
  {
    id: 2,
    project_name: "FlavorCrave",
    category: "Development",
    description:
      "A MERN Stack Restaurant website, simplifies Online food buying system. Personalized plans, and . Start today for a better tomorrow. AdminId: Admin02@gmail.com , pass : Admin2@ ",
    project_thumnail:
      "https://i.ibb.co.com/Mf6Zr5Q/bangla-restaurant-83eb9-web-app-2.png",
    images:
      "https://img.freepik.com/free-vector/northern-lights-landing-page-template_23-2148331593.jpg",
    technology: ["React", "Tailwinds", "Jwt", "Node", "MongoDB", "ExpressJs"],
    project_source: [
      {
        client_github_link:
          "https://github.com/yasin-hasan2/bangla-resturent.git",
      },
      {
        server_github_link:
          "https://github.com/yasin-hasan2/bangla-restaurant-server.git",
      },
      {
        live_link: "https://bangla-restaurant-83eb9.web.app/",
      },
    ],
  },
  {
    id: 3,
    project_name: "PeakFit",
    category: "Web Design",
    description:
      "A MERN Stack Gym center Website, simplifies your fitness journey. Personalized plans, real-time tracking, and community support make achieving your health goals effortless. Start today for a healthier tomorrow. TrainerID: Admin02@gmail.com , pass : Admin02@",
    project_thumnail:
      "https://i.ibb.co.com/ZxbDW2N/66ed605d36cd1641a2542987-fitness-tracker-app-by-strong-netlify-app.png",
    images:
      "https://img.freepik.com/free-vector/liquid-landing-page-template_52683-23418.jpg",
    technology: ["React", "Tailwinds", "Jwt", "Node", "MongoDB", "ExpressJs"],
    project_source: [
      {
        client_github_link:
          "https://github.com/yasin-hasan2/fetnees-tracker.git",
      },
      {
        server_github_link:
          "https://github.com/yasin-hasan2/fetnees-tracker-server.git",
      },
      {
        live_link: "https://peakfit-fitness-app.netlify.app/",
      },
    ],
  },
  {
    id: 4,
    project_name: "Link Up",
    category: "UI/UX",
    description:
      "A MERN Stack Social media Website Like Facebook or Instagram . Personalized plans, and community support make achieving Joyfully moment. Start today for a new enjoyfull tomorrow. TestingID: Admin02@gmail.com , pass : Admin02@",
    project_thumnail:
      "https://i.ibb.co.com/F5WRTmt/link-up-1-netlify-app-i-Phone-12-Pro.png",
    images:
      "https://img.freepik.com/premium-vector/abstract-futuristic-gradient-background-with-blue-dynamic-wave-landing-page_830252-101.jpg",
    technology: ["React", "Tailwinds", "Jwt", "Node", "MongoDB", "ExpressJs"],
    project_source: [
      {
        client_github_link:
          "https://github.com/yasin-hasan2/Link-Up-client-site.git",
      },
      {
        server_github_link:
          "https://github.com/yasin-hasan2/Link-Up-server-site.git",
      },
      {
        live_link: "https://link-up-1.netlify.app/",
      },
    ],
  },
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
    <div className="max-h-full p-12 bg-white text-black dark:bg-black dark:text-white">
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
