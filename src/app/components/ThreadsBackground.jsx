"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThreadsBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return null;

  // Generate thread paths
  const threads = Array.from({ length: 12 }, (_, i) => {
    const startX = (i * 100) / 12;
    const amplitude = 50 + i * 10;
    const frequency = 0.02 + i * 0.001;

    return {
      id: i,
      startX,
      amplitude,
      frequency,
      opacity: 0.1 + i * 0.05,
      strokeWidth: 1 + i * 0.2,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(251, 191, 36, 0)" />
            <stop offset="50%" stopColor="rgba(249, 115, 22, 0.3)" />
            <stop offset="100%" stopColor="rgba(251, 191, 36, 0)" />
          </linearGradient>
        </defs>

        {threads.map((thread) => {
          const pathData = Array.from({ length: 100 }, (_, x) => {
            const normalizedX = x / 100;
            const mouseInfluence = Math.exp(
              -Math.pow((normalizedX - mousePosition.x) * 2, 2)
            );
            const baseY =
              50 +
              Math.sin(
                normalizedX * Math.PI * 4 +
                  thread.frequency * Date.now() * 0.001
              ) *
                thread.amplitude *
                0.1;
            const mouseY = mousePosition.y * 100 * mouseInfluence * 0.3;
            const y = baseY + mouseY;

            return `${x === 0 ? "M" : "L"} ${normalizedX * 100} ${y}`;
          }).join(" ");

          return (
            <motion.path
              key={thread.id}
              d={pathData}
              fill="none"
              stroke="url(#threadGradient)"
              strokeWidth={thread.strokeWidth}
              opacity={thread.opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2 + thread.id * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Additional flowing particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
