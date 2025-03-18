"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Server,
  Database,
  Code,
  Globe,
  Calendar,
  Clock,
  Tag,
} from "lucide-react";
import Link from "next/link";

// Sample project data based on the provided structure
// const projects = [
//   {
//     _id: "67d28aab025f83216dcc4c6a",
//     id: "2", // Changed to string to match the route param type
//     website_name: "FlavorCrave",
//     website_title: "An online food ordering platform",
//     category: "Development",
//     description:
//       "A MERN Stack Restaurant website that simplifies online food ordering with a focus on personalized user experience and seamless payment integrations.",
//     problem_solving:
//       "FlavorCrave eliminates inefficiencies in traditional food ordering by providing a responsive web app that allows users to browse menus, place orders, and track delivery status in real time.",
//     comparison: {
//       DoorDash:
//         "Unlike DoorDash, FlavorCrave is focused on direct restaurant-to-customer interactions without middleman commissions.",
//       Swiggy:
//         "FlavorCrave provides restaurant owners with their own delivery management system, unlike Swiggy, which handles deliveries for multiple eateries.",
//     },
//     website_thumbnail: "https://i.ibb.co.com/Mf6Zr5Q/bangla-restaurant-83eb9-web-app-2.png",
//     additional_images: [
//       "https://img.freepik.com/free-vector/northern-lights-landing-page-template_23-2148331593.jpg",
//       "https://img.freepik.com/free-vector/northern-lights-landing-page-template_23-2148331593.jpg",
//       "https://img.freepik.com/free-vector/northern-lights-landing-page-template_23-2148331593.jpg",
//     ],
//     technology: ["React", "Tailwind CSS", "JWT", "Node.js", "MongoDB", "Express.js"],
//     hosting: {
//       frontend: "Netlify",
//       backend: "Render",
//       database: "MongoDB Atlas",
//     },
//     website_source: {
//       client_github_link: "https://github.com/yasin-hasan2/bangla-resturent.git",
//       server_github_link: "https://github.com/yasin-hasan2/bangla-restaurant-server.git",
//       live_link: "https://bangla-restaurant-83eb9.web.app/",
//     },
//     project_full_details:
//       "<p>This is a&nbsp;<strong>UI/UX&nbsp;<em>and&nbsp;</em></strong>&nbsp;and also a full-stack MERN application designed to revolutionize the food ordering experience. The project focuses on creating a seamless interface between restaurants and customers.</p><p><br></p><p>Key features of FlavorCrave include:</p><p><br></p><p>1. <strong>User Authentication</strong>: Secure login and registration system using JWT for authentication.</p><p><br></p><p>2. <strong>Interactive Menu</strong>: Categorized food items with search and filter capabilities.</p><p><br></p><p>3. <strong>Order Management</strong>: Real-time order tracking and history for customers.</p><p><br></p><p>4. <strong>Admin Dashboard</strong>: Comprehensive control panel for restaurant owners to manage menu items, orders, and customer data.</p><p><br></p><p>5. <strong>Responsive Design</strong>: Fully responsive interface that works seamlessly across all devices.</p><p><br></p><p>6. <strong>Payment Integration</strong>: Secure payment processing with multiple payment options.</p><p><br></p><p>The application was built using React for the frontend, with Tailwind CSS for styling. The backend is powered by Node.js and Express, with MongoDB serving as the database. Authentication is handled through JWT tokens, ensuring secure user sessions.</p><p><br></p><p>The project demonstrates advanced concepts in full-stack development, including state management, API integration, database design, and deployment strategies across different hosting platforms.</p>",
//   },
// ]

export default function ProjectDetails({ singleProject }) {
  console.log(singleProject);
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    const fetchProject = () => {
      setLoading(true);

      let projectArray = Array.isArray(singleProject)
        ? singleProject
        : [singleProject];

      // Find the project with the matching ID
      const foundProject = projectArray.find((p) => p._id === params._id);

      if (foundProject) {
        setProject(foundProject);

        // Find related projects (same category but different ID)
        const related = projectArray
          .filter(
            (p) =>
              p.category === foundProject.category && p.id !== foundProject.id
          )
          .slice(0, 2); // Limit to 2 related projects

        setRelatedProjects(related);
      } else {
        console.error("Project not found with ID:", params._id);
      }

      setLoading(false);
    };

    fetchProject();
  }, [params._id, singleProject]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-xl">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black dark:bg-black ">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => router.push("/portfolio")}
              className="inline-flex items-center text-white mb-6 hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </button>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.website_name}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl">
              {project.website_title}
            </p>
            <p className="mb-6 text-gray-700">{project.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Project Details */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Main Image */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img
                src={
                  activeImage === 0
                    ? project.website_thumbnail
                    : project.additional_images[activeImage - 1]
                }
                alt={project.website_name}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=600&width=800";
                }}
              />
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div
                className={`cursor-pointer rounded-lg overflow-hidden ${
                  activeImage === 0
                    ? "ring-4 ring-orange-500"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveImage(0)}
              >
                <img
                  src={project.website_thumbnail || "/placeholder.svg"}
                  alt={`${project.website_name} - Thumbnail`}
                  className="w-full h-20 object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=200&width=300";
                  }}
                />
              </div>
              {project.additional_images &&
                project.additional_images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-lg overflow-hidden ${
                      activeImage === index + 1
                        ? "ring-4 ring-orange-500"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setActiveImage(index + 1)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.website_name} - Image ${index + 1}`}
                      className="w-full h-20 object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=300";
                      }}
                    />
                  </div>
                ))}
            </div>

            {/* Project Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

              <div className="max-h-80 overflow-y-auto pr-4 custom-scrollbar">
                <div className="prose max-w-none">
                  {project.project_full_details
                    ? project.project_full_details
                        .trim() // Remove extra spaces at the start and end
                        .split("\n\n") // Split by double new lines for paragraphs
                        .map((paragraph, index) => (
                          <div key={index} className="mb-4"></div>
                        ))
                    : "No project details available."}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.project_full_details,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Problem Solving */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
              <div className="max-h-60 overflow-y-auto pr-4 custom-scrollbar">
                <p className="text-gray-700">{project.problem_solving}</p>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Comparison with Similar Platforms
              </h2>
              <div className="space-y-4">
                {project.comparison &&
                  Object.entries(project.comparison).map(
                    ([platform, comparison]) => (
                      <div
                        key={platform}
                        className="border-l-4 border-orange-500 pl-4 py-2"
                      >
                        <h3 className="font-semibold text-lg">{platform}</h3>
                        <div>
                          {comparison
                            ? comparison
                                .trim() // Remove extra spaces at the start and end
                                .split("\n\n") // Split by double new lines for paragraphs
                                .map((paragraph, index) => (
                                  <div key={index} className="mb-4">
                                    {paragraph}
                                  </div>
                                ))
                            : "No comparison details available."}
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Project Links */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Project Links</h2>
              <div className="space-y-4">
                <a
                  href={project.website_source.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.website_source.client_github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
                >
                  <Github className="mr-2 h-5 w-5" />
                  <span>Client Source Code</span>
                </a>
                <a
                  href={project.website_source.server_github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
                >
                  <Server className="mr-2 h-5 w-5" />
                  <span>Server Source Code</span>
                </a>
              </div>
            </div>

            {/* Hosting Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Hosting Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Globe className="mr-3 h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Frontend</h3>
                    <p className="text-gray-600">{project.hosting.frontend}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Server className="mr-3 h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Backend</h3>
                    <p className="text-gray-600">{project.hosting.backend}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="mr-3 h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Database</h3>
                    <p className="text-gray-600">{project.hosting.database}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="mr-3 h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Completion Date</h3>
                    <p className="text-gray-600">{project.date}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Project Duration</h3>
                    {/* <p className="text-gray-600">{project.duration}</p> */}
                  </div>
                </div>
                <div className="flex items-start">
                  <Tag className="mr-3 h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Category</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code className="mr-3 h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Role</h3>
                    {/* <p className="text-gray-600">{project.role}</p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Related Projects</h2>
                <div className="space-y-4">
                  {relatedProjects.map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      href={`/portfolio/${relatedProject.id}`}
                      className="block group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={
                              relatedProject.website_thumbnail ||
                              "/placeholder.svg"
                            }
                            alt={relatedProject.website_name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src =
                                "/placeholder.svg?height=64&width=64";
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-orange-600 transition-colors">
                            {relatedProject.website_name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedProject.website_title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
