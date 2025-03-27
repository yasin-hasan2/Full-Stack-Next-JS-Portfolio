"use client"; // ✅ Mark this as a Client Component
import { useEffect, useState } from "react";
import ProjectsCard from "./portfolio-Components/ProjectsCard";

export default function Portfolio() {
  const [allProjects, setAllProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjectsData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
          { cache: "no-store" } // ✅ No caching for fresh data
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setAllProjects(data.allProjects);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    getProjectsData();
  }, []); // ✅ Runs once when the component mounts

  return (
    <div className="lg:max-w-screen-lg max-w-screen-sm bg-white text-black dark:bg-black dark:text-white">
      <h1
        className="text-transparent sm:text-4xl text-center sm:mb-8 bg-clip-text text-3xl md:text-4xl font-bold mb-6 pt-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient"
        data-aos="fade-up"
      >
        Portfolio
      </h1>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <ProjectsCard projects={allProjects} />
      )}
    </div>
  );
}
