"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, BookOpen, Briefcase, Award, Code } from "lucide-react";
import Link from "next/link";

// Education data
const educationData = [
  {
    institution: "Al-Azhar University",
    degree: "Bachelor of Engineering",
    field: "Systems and Computers Engineering",
    department: "Systems and Computers Engineering Department",
    faculty: "Faculty of Engineering",
    duration: "2019 - 2023",
  },
];

// Experience data
const experienceData = [
  {
    position: "Frontend Engineer",
    company: "Tagger",
    type: "Full-time",
    duration: "August 2024 - Present",
    responsibilities: [
      "Developed and maintained responsive web applications using React and Next.js",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
      "Optimized application performance and improved load times by 40%",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Cube Master",
    type: "Full-time",
    duration: "March 2024 - June 2024",
    responsibilities: [
      "Built interactive user interfaces using React and TypeScript",
      "Implemented state management solutions with Redux and Context API",
      "Worked in an Agile environment with daily stand-ups and sprint planning",
    ],
  },
  {
    position: "Full Stack Developer",
    company: "Triangles",
    type: "Full-time",
    duration: "October 2023 - February 2024",
    responsibilities: [
      "Developed full-stack applications using MERN stack (MongoDB, Express, React, Node.js)",
      "Created RESTful APIs and implemented authentication systems",
      "Deployed and maintained applications on cloud platforms",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Triangles",
    type: "Full-time",
    duration: "March 2022 - October 2023",
    responsibilities: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Implemented UI components following design specifications",
      "Collaborated with backend developers to integrate APIs",
    ],
  },
  {
    position: "Freelance Frontend Developer",
    company: "Self-employed",
    type: "Freelance",
    duration: "January 2022 - Present",
    responsibilities: [
      "Available for freelance, short-term, and long-term projects",
      "Developed custom websites and web applications for various clients",
      "Provided maintenance and support for existing web applications",
    ],
  },
];

// Certification data
const certificationData = [
  {
    name: "Meta Frontend Developer Professional Certificate",
    issuer: "Coursera",
    date: "2023",
    link: "#",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    link: "#",
  },
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2022",
    link: "#",
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
  },
];

// Skills data
const skillsData = {
  frontend: [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "SASS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Glowing dot component
const GlowingDot = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-4 h-4 bg-orange-500 rounded-full -left-8 top-1 z-10"
      initial={{ scale: 0.8, boxShadow: "0 0 0px rgba(249, 115, 22, 0.7)" }}
      animate={{
        scale: [0.8, 1.2, 0.8],
        boxShadow: [
          "0 0 5px rgba(249, 115, 22, 0.7)",
          "0 0 20px rgba(249, 115, 22, 0.7)",
          "0 0 5px rgba(249, 115, 22, 0.7)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
      }}
    />
  );
};

// Custom hook for counting animation
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animationTimer, setAnimationTimer] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const step = end / (duration / 16); // 16ms is roughly one frame at 60fps

          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
              setAnimationTimer(null);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          setAnimationTimer(timer);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
      if (animationTimer) {
        clearInterval(animationTimer);
      }
    };
  }, [end, duration, hasAnimated, animationTimer]);

  return [count, countRef];
}

export default function Resume() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <div className="flex justify-between items-center mb-8">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h1>
        <motion.a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={18} />
          <span>Download CV</span>
        </motion.a>
      </div>

      {/* Career Objectives */}
      <motion.section
        className="mb-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-40 h-40 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  borderRadius: ["50%", "30%", "50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Career Objectives
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Passionate and detail-oriented Frontend Developer with 3+ years of
              experience in building responsive and user-friendly web
              applications. Seeking to leverage my technical skills and
              creativity in a challenging role that allows for professional
              growth and innovation. My goal is to create exceptional digital
              experiences that combine cutting-edge technology with intuitive
              design principles.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-orange-500" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 ml-3 relative">
          <motion.div
            className="absolute h-full w-full top-0 left-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              background:
                "linear-gradient(0deg, rgba(249,115,22,0) 0%, rgba(249,115,22,0.3) 50%, rgba(249,115,22,0) 100%)",
            }}
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-8 relative"
              variants={itemVariants}
            >
              <GlowingDot delay={index * 0.5} />
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-orange-500 font-medium">{edu.duration}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {edu.degree} in {edu.field}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {edu.department}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.faculty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-orange-500" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>

        <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 ml-3 relative">
          <motion.div
            className="absolute h-full w-full top-0 left-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              background:
                "linear-gradient(0deg, rgba(249,115,22,0) 0%, rgba(249,115,22,0.3) 50%, rgba(249,115,22,0) 100%)",
            }}
          />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 relative"
              variants={itemVariants}
            >
              <GlowingDot delay={index * 0.3} />
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.position}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {exp.company}
                  </span>
                  <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded-full">
                    {exp.type}
                  </span>
                </div>
                <p className="text-orange-500 font-medium mt-1">
                  {exp.duration}
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-orange-500" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {cert.name}
              </h3>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </span>
                <span className="text-orange-500">{cert.date}</span>
              </div>
              <a
                href={cert.link}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm inline-block mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-3 mb-6">
          <Code className="text-orange-500" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Skills
          </h2>
        </div>

        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend Development
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
              {skillsData.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=50&width=50";
                    }}
                  />
                  <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend Development
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4">
              {skillsData.backend.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=50&width=50";
                    }}
                  />
                  <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {skillsData.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=50&width=50";
                    }}
                  />
                  <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Back to Home Button */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link href="/">
          <button className="group relative px-6 py-3 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-white font-medium hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 transition-opacity transform hover:scale-105 duration-300 ease-out shadow-lg hover:shadow-xl">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Home
            </span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
