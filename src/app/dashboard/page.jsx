"use client"; // 👈 Convert to a Client Component

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DashboardPage = dynamic(() => import("./components/dashboardPage"), {
  ssr: false, // ⛔ Prevents server-side rendering
});

const ProjectTable = dynamic(() => import("./components/projectTable"), {
  ssr: false,
});

export default function mainPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // ⏳ Loading state

  console.log("project all data", projects);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      await new Promise((resolve) => setTimeout(resolve, 2000)); // ⏳ Delay 2 seconds

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProjects(data.allProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
        setProjects([]); // Prevent crash
      } finally {
        setLoading(false); // ✅ Stop loading
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div> // ⏳ Show loading
      ) : (
        <>
          <ProjectTable projects={projects} />
          <DashboardPage projects={projects} />
        </>
      )}
    </div>
  );
}
