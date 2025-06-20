"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ThreadsBackground from "./components/ThreadsBackground";
import ImageTrail from "./components/ImageTrail";

// Dynamically import MediaIcons with no SSR
const MediaIcons = dynamic(() => import("./components/MediaIcons.jsx"), {
  ssr: false,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // For text animation
  const [text, setText] = useState("");
  const fullText = "Frontend Developer & UI/UX Designer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Text animation effect
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden relative">
      {/* Threads Background */}
      <ThreadsBackground />

      {/* Left Section - Text and Buttons */}
      <motion.div
        className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
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
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 h-8 my-6"
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
            <button className="group relative px-8 py-4 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 text-black font-bold tracking-wider uppercase text-sm hover:shadow-lg transition-all duration-300 ease-out">
              <span className="flex items-center gap-2 relative z-10">
                More About Me
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
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
            <button className="flex justify-between bg-gray-800 dark:bg-gray-700 px-4 py-2 rounded-full text-white tracking-wider shadow-lg hover:bg-gray-900 dark:hover:bg-gray-800 hover:scale-105 duration-300 hover:ring-1 hover:ring-orange-400 font-mono w-[150px] relative overflow-hidden group">
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

      {/* Right Section - Image with Trail Effect */}
      {/* bg-gradient-to-br from-gray-100 to-gray-200 dark:from-black dark:to-black : remove css */}
      <motion.div
        className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen   overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile image with trail effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ImageTrail
            src="/img/IMG_0098.jpg"
            alt="Profile"
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
