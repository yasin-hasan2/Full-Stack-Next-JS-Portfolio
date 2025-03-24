import React from "react";
import UpdateForm from "../../components/updateForm";

const getProjectId = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch project with ID: ${id}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { project: {} }; // ✅ Return an empty object to prevent crashes
  }
};

export default async function page({ params }) {
  const id = params.id;
  if (!id) {
    return <p>Invalid project ID</p>;
  }

  const project = await getProjectId(id); // Fetch data

  if (!project || !project._id) {
    return <p>Project not found</p>;
  }

  console.log("Project data:", project);

  return (
    <div>
      <h1> {project.website_name} </h1>
      <UpdateForm
        id={project._id}
        website_name={project.website_name}
        website_title={project.website_title}
        category={project.category}
        description={project.description}
        project_full_details={project.project_full_details}
        problem_solving={project.problem_solving}
        website_thumbnail={project.website_thumbnail}
        additional_images={project.additional_images}
        technology={project.technology}
        hosting={project.hosting}
        website_source={project.website_source}
      />
    </div>
  );
}
