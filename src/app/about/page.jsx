"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Tools data organized by category
const toolsData = {
  languages: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ],
  frameworks: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
  ],
  libraries: [
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "jQuery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    { name: "Three.js", icon: "/placeholder.svg?height=50&width=50" },
  ],
  components: [
    {
      name: "Storybook",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
    },
    { name: "Framer Motion", icon: "/placeholder.svg?height=50&width=50" },
    { name: "React Query", icon: "/placeholder.svg?height=50&width=50" },
    { name: "React Hook Form", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Zustand", icon: "/placeholder.svg?height=50&width=50" },
  ],
  software: [
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
  ],
};

// Stats data
const statsData = [
  { label: "Years Experience", value: 5, symbol: "+" },
  { label: "Projects Done", value: 100, symbol: "+" },
  { label: "Happy Clients", value: 50, symbol: "+" },
  { label: "Awards", value: 10, symbol: "+" },
];

// Services data
const servicesData = [
  {
    title: "Web Development",
    description: "Creating responsive and dynamic websites",
    details:
      "I specialize in building modern, responsive websites using the latest technologies. My approach focuses on creating clean, efficient code that delivers exceptional user experiences. From simple landing pages to complex web applications, I can bring your vision to life with attention to detail and performance optimization.",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces",
    details:
      "My design process begins with understanding user needs and business goals. I create wireframes, prototypes, and high-fidelity designs that are not only visually appealing but also intuitive and accessible. I believe in design systems that ensure consistency and scalability across products.",
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile apps",
    details:
      "I develop mobile applications that work seamlessly across iOS and Android platforms. Using React Native and other cross-platform technologies, I create native-like experiences that are performant and maintainable. My mobile apps are designed with offline capabilities, smooth animations, and efficient state management.",
  },
];

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

// Modal component
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </motion.div>
    </div>
  );
}

export default function About() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setModalContent(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 md:p-12">
      <h1
        className="text-transparent sm:text-4xl  sm:mb-8 bg-clip-text text-3xl md:text-4xl font-bold mb-6 pt-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient"
        data-aos="fade-up"
      >
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white ">
            Who am I?
          </h2>
          <div className="">
            <p className="text-gray-600 mb-4 dark:text-[#c9c5c5ca] font-normal">
              I'm a passionate developer and designer with a keen eye for detail
              and a love for creating beautiful, functional digital experiences.
            </p>
            <p className="text-gray-600 mb-4 dark:text-[#c9c5c5ca] font-normal">
              With over 5 years of experience in the industry, I've worked with
              various technologies and frameworks to deliver high-quality
              solutions that meet client needs and exceed expectations.
            </p>
            <p className="text-gray-600 dark:text-[#c9c5c5ca] font-normal">
              My approach combines technical expertise with creative
              problem-solving, allowing me to tackle complex challenges and
              transform ideas into reality. I believe in continuous learning and
              staying updated with the latest industry trends and best
              practices.
            </p>
          </div>
          <button
            className="mt-6 px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
            onClick={() =>
              openModal({
                title: "My Journey",
                details: `I started my journey as a self-taught developer, learning through online resources and building personal projects. This hands-on approach gave me a strong foundation in problem-solving and independent learning.

              After gaining initial experience, I worked with several startups where I had the opportunity to wear multiple hats - from frontend and backend development to UI/UX design. This versatility has become one of my greatest strengths.

              Over the years, I've collaborated with teams of various sizes, from small agencies to large corporations. Each experience has taught me valuable lessons about teamwork, communication, and delivering results under pressure.

              Today, I focus on creating seamless digital experiences that not only look great but also solve real problems for users and businesses alike. My goal is to continue growing as a developer while making meaningful contributions to projects that matter.`,
              })
            }
          >
            Read More
          </button>
        </motion.div>

        <div
          className="grid grid-cols-2 gap-4 md:gap-6"
          ref={statsData[0].countRef}
        >
          {statsData.map((stat, index) => {
            const [count, countRef] = useCountUp(stat.value);

            return (
              <motion.div
                key={index}
                ref={countRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-black dark:border dark:border-white p-4 md:p-6 rounded-lg shadow-md dark:shadow-[#c9c5c5ca]"
              >
                <div className="text-2xl md:text-3xl font-bold text-orange-500">
                  {count}
                  {stat.symbol}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-[#c9c5c5ca] font-normal ">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6">What I Do?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(service)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-orange-500 hover:text-orange-700 transition-colors text-sm">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 dark:text-white">
          My Toolbox
        </h2>

        {Object.entries(toolsData).map(([category, tools]) => (
          <div key={category} className="mb-10">
            <h3 className="text-lg font-semibold mb-4 capitalize dark:text-white">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-black dark:border dark:border-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={tool.icon || "/placeholder.svg"}
                    alt={tool.name}
                    className="w-12 h-12 mb-2"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=50&width=50";
                    }}
                  />
                  <span className="text-sm font-medium dark:text-[#c9c5c5ca]">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent?.title || ""}
      >
        <div className="prose max-w-none">
          {modalContent?.details?.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </Modal>
    </div>
  );
}
