import Layout from "../components/layout";
import { Code, Database, Globe } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8 text-white" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8 text-white" />,
      skills: ["Node.js", "Express", "Python", "Django"],
    },
    {
      title: "Other",
      icon: <Code className="w-8 h-8 text-white" />,
      skills: ["Git", "Docker", "AWS", "GraphQL"],
    },
  ];

  return (
    <Layout>
      <h1
        className="text-3xl font-bold  mb-8 bg-white text-black dark:bg-black dark:text-white"
        data-aos="fade-up"
      >
        My Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h2 className="text-2xl font-bold text-white ml-2">
                {category.title}
              </h2>
            </div>
            <ul className="list-disc list-inside text-white">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
