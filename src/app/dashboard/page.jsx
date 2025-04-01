"use client"; // ✅ Convert to a Client Component

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DashboardPage = dynamic(() => import("./components/dashboardPage"), {
  ssr: false, // ⛔ Prevents server-side rendering
});

const ProjectTable = dynamic(() => import("./components/projectTable"), {
  ssr: false,
});

export default function MainPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // ⏳ Loading state
  const [error, setError] = useState(null); // ❌ Error handling

  console.log("project all data", projects);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      await new Promise((resolve) => setTimeout(resolve, 2000)); // ⏳ Delay 2 seconds

      try {
        // ✅ Use Next.js API route to avoid CORS issues
        const res = await fetch("/api/proxy");
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        setProjects(data.allProjects);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load projects.");
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
      ) : error ? (
        <div className="text-center text-red-500">{error}</div> // ❌ Show error
      ) : (
        <>
          <ProjectTable projects={projects} />
          <DashboardPage projects={projects} />
        </>
      )}
    </div>
  );
}
