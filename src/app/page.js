"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import Lottie with no SSR to avoid hydration issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const MediaIcons = dynamic(() => import("./components/MediaIcons.jsx"), {
  ssr: false,
});

// Import Lottie animations
const developerAnimation = {
  src: "https://lottie.host/embed/0a32f2e9-5d4a-4bd8-9c3c-e0c2d52d7d6a/JHbOKP2Lnj.json",
};

const particlesAnimation = {
  src: "https://lottie.host/embed/c2128676-7bc9-4b5e-8b5d-e8b9c5c42fb0/Ij9FcQTJvA.json",
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lottieData, setLottieData] = useState(null);
  const [particlesData, setParticlesData] = useState(null);

  // For text animation
  const [text, setText] = useState("");
  const fullText = "Frontend Developer & UI/UX Designer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Fetch Lottie animations
    const fetchLottieAnimations = async () => {
      try {
        const developerResponse = await fetch(developerAnimation.src);
        const developerData = await developerResponse.json();
        setLottieData(developerData);

        const particlesResponse = await fetch(particlesAnimation.src);
        const particlesData = await particlesResponse.json();
        setParticlesData(particlesData);
      } catch (error) {
        console.error("Failed to load Lottie animations:", error);
      }
    };

    fetchLottieAnimations();

    // Text animation effect
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [index]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden">
      {/* Left Section - Text and Buttons */}
      <motion.div
        className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background particles for left section */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {particlesData && (
            <Lottie animationData={particlesData} loop={true} />
          )}
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi There!
          <br />
          I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient relative">
            Yasin Al Hasan
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1 }}
            />
          </span>
        </motion.h1>

        {/* Animated text description with typewriter effect */}
        <motion.div
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="relative">
            {text}
            <motion.span
              className="absolute right-[-4px] top-0 h-full w-[2px] bg-orange-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: index >= fullText.length ? Number.POSITIVE_INFINITY : 0,
              }}
            />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/about">
            <button className="group relative px-10 py-5 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-black font-bold tracking-wider uppercase text-sm hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 transition-opacity transform hover:rotate-1 duration-300 ease-out shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] active:scale-90 overflow-hidden before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-amber-400/50 before:transition-all before:duration-300 hover:before:border-amber-300 hover:before:scale-105">
              <span className="flex items-center gap-2 relative z-10">
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 hover:animate-spin duration-1000"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                  ></path>
                </svg>
                More About Me
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <div className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-tl from-amber-200/40 via-transparent to-transparent"></div>
              <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 w-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=116XhbSdZX0ZX7o3pcYxKa81_HWAQyeNC"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="cursor-pointer flex justify-between bg-gray-800 dark:bg-gray-700 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 dark:hover:bg-gray-800 hover:scale-105 duration-500 hover:ring-1 hover:ring-orange-400 font-mono w-[150px] relative overflow-hidden group">
              <span className="relative z-10">Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce relative z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8"
        >
          <MediaIcons />
        </motion.div>
      </motion.div>

      {/* Right Section - Image and Animation */}
      <motion.div
        className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Lottie animation background */}
        <div className="absolute inset-0 opacity-30">
          {lottieData && <Lottie animationData={lottieData} loop={true} />}
        </div>

        {/* Profile image with hover animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group cursor-pointer">
            <Image
              src="/img/IMG_0098.jpg"
              alt="Profile"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 300px, 400px"
              priority
            />

            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              initial={{ borderColor: "rgba(251, 191, 36, 0)" }}
              animate={{
                borderColor: [
                  "rgba(251, 191, 36, 0.7)",
                  "rgba(249, 115, 22, 0.7)",
                  "rgba(251, 191, 36, 0.7)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/70 to-yellow-400/50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Yasin Al Hasan
              </span>
            </div>
          </div>
        </motion.div>

        {/* Floating elements - More bubbles with better distribution */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-full ${
                index % 3 === 0
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 w-12 h-12"
                  : index % 3 === 1
                  ? "bg-gradient-to-r from-orange-300 to-yellow-300 w-8 h-8"
                  : "bg-gradient-to-r from-amber-200 to-yellow-200 w-6 h-6"
              } opacity-70`}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
                y: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
                opacity: [0.4, 0.7, 0.4],
                scale: [
                  Math.random() * 0.3 + 0.5,
                  Math.random() * 0.5 + 0.7,
                  Math.random() * 0.3 + 0.5,
                ],
              }}
              transition={{
                duration: 10 + index * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Additional bubbles in the corners */}
        <div className="absolute top-10 left-10">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 opacity-60"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="absolute bottom-20 right-20">
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 opacity-60"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="absolute top-1/3 right-10">
          <motion.div
            className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-red-300 opacity-50"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Additional bubbles in the middle area */}
        <div className="absolute top-1/2 left-1/4">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-200 to-amber-300 opacity-40"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="absolute bottom-1/4 left-1/3">
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-200 to-yellow-300 opacity-50"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
