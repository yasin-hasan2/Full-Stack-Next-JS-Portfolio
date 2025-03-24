import React from "react";
import DashboardPage from "./components/dashboardPage";
import ProjectTable from "./components/projectTable";

const getProjectsData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { cars: [] }; // ✅ Return an empty array to prevent crashes
  }
};

export default async function mainPage() {
  const { allProjects } = await getProjectsData(); // Fetch data
  return (
    <div className="space-y-4">
      <ProjectTable projects={allProjects} />
      <DashboardPage projects={allProjects} />
    </div>
  );
}
