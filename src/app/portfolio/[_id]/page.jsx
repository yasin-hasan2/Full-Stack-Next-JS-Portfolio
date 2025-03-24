import ProjectDetails from "@/app/components/DetailsPage";
import React from "react";

// get all project Data

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

// get project Data By Id

const getProjectDataById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`,
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
    return null; // Return null to indicate an error
  }
};

export default async function page({ params }) {
  const { allProjects } = await getProjectsData(); // Fetch data
  // console.log(allProjects);
  const singleProject = await getProjectDataById(params._id);

  if (!singleProject) {
    return <div>Error loading project data</div>;
  }
  return (
    <div className="p-12 bg-white text-black dark:bg-black dark:text-white">
      <ProjectDetails allProjects={allProjects} singleProject={singleProject} />
    </div>
  );
}
