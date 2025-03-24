"use client";
import { useState } from "react";
import { Eye, Pencil, Trash2, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import UpdateForm from "./updateForm";

export default function ProjectTable({ projects }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projectToDelete, setProjectToDelete] = useState(null);
  const [projectsList, setProjectsList] = useState(projects);

  const openModal = (project) => {
    setProjectToDelete(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setProjectToDelete(null);
    setIsModalOpen(false);
    setIsUpdateModalOpen(false);
  };

  const handleDelete = async (id, website_name) => {
    console.log("Deleting id:", id);
    if (!id || id.length !== 24) {
      console.error("Invalid ID format:", id);
      toast.error("Invalid project ID");
      return;
    }

    console.log("Deleting project with ID:", id);

    try {
      // Assuming the API expects the ID in the query string
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete project");
      }

      toast.success(`Project "${website_name}" deleted successfully`);
      closeModal(true);
      // Refresh the car list (optional)
      setProjectsList((prevProjects) =>
        prevProjects.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    }
  };

  return (
    <div className="border lg:p-4 rounded-lg shadow-2xl  ">
      <table className="min-w-full bg-white/30 backdrop-blur-md shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg">
            <th className="px-4 py-4 text-left font-bold uppercase">
              Project Name
            </th>
            <th className="px-4 py-4 text-left font-bold uppercase">
              Category
            </th>
            <th className="px-4 py-4 text-left font-bold uppercase">Image</th>
            <th className="px-4 py-4 text-left font-bold uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectsList.map((project) => (
            <tr
              key={project._id}
              className="border-b border-gray-200 hover:bg-white/40 backdrop-blur-md transition-all duration-300"
            >
              <td className="px-4 py-4 text-gray-800 font-semibold">
                {project.website_name}
              </td>
              <td className="px-4 py-4 text-gray-600">{project.category}</td>
              <td className="px-4 py-4">
                {project.website_thumbnail && (
                  <img
                    src={project.website_thumbnail}
                    alt={project.website_name}
                    className="h-12 w-12 object-cover rounded-lg shadow-md hover:scale-110 transition-transform"
                  />
                )}
              </td>
              <td className="px-4 py-4 flex items-center justify-center gap-3">
                <a
                  href={`/portfolio/${project._id}`}
                  className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
                >
                  <Eye size={20} />
                </a>

                <Link href={`/dashboard/update/${project._id}`}>
                  <button className="text-yellow-600 hover:text-yellow-800 transition-transform transform hover:scale-110">
                    <Pencil size={20} />
                  </button>
                </Link>

                <button
                  onClick={() => openModal(project)}
                  className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />

      {/* /// Modal  */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn"></div>
          <div className="bg-white p-6 rounded-lg shadow-xl z-10 w-11/12 max-w-md text-center animate-slideUp">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Confirm Delete
            </h2>
            <p className="text-gray-600">
              Are you sure you want to delete "{projectToDelete.website_name}"?
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() =>
                  handleDelete(
                    projectToDelete._id,
                    projectToDelete.website_name
                  )
                }
                className="px-5 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition transform hover:scale-105 flex items-center"
              >
                <Trash2 className="mr-1" size={16} /> Delete
              </button>

              <button
                onClick={closeModal}
                className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition transform hover:scale-105 flex items-center"
              >
                <X className="mr-1" size={16} /> Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
