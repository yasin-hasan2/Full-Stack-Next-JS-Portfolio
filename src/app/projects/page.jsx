import Layout from "../components/layout";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    { title: "Project 1", description: "A brief description of Project 1" },
    { title: "Project 2", description: "A brief description of Project 2" },
    { title: "Project 3", description: "A brief description of Project 3" },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white mb-8" data-aos="fade-up">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-white mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
