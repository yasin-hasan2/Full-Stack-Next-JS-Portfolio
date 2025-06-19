"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageTrail({ src, alt, className }) {
  const [isClient, setIsClient] = useState(false);
  const [trails, setTrails] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Reduce the movement range to keep image more stable
      const moveX = (e.clientX - centerX) * 0.1;
      const moveY = (e.clientY - centerY) * 0.1;

      mouseX.set(moveX);
      mouseY.set(moveY);

      // Add new trail point only when hovering
      if (isHovering) {
        const newTrail = {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          timestamp: Date.now(),
        };

        setTrails((prev) => [...prev.slice(-6), newTrail]);
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // Reset position when mouse leaves
      mouseX.set(0);
      mouseY.set(0);
      // Clear trails
      setTrails([]);
    };

    const container = document.getElementById("image-trail-container");
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isClient, mouseX, mouseY, isHovering]);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrails((prev) => prev.filter((trail) => now - trail.timestamp < 800));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return (
      <div className={className}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div id="image-trail-container" className={`${className} relative group`}>
      {/* Main image - always visible and stable */}
      <motion.div
        className="relative w-full h-full"
        style={{ x, y }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-all duration-300"
          sizes="(max-width: 768px) 300px, 400px"
          priority
        />

        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          animate={{
            borderColor: [
              "rgba(251, 191, 36, 0.5)",
              "rgba(249, 115, 22, 0.7)",
              "rgba(251, 191, 36, 0.5)",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/60 to-yellow-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-full">
          <motion.span
            className="text-white text-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Yasin Al Hasan
          </motion.span>
        </div>
      </motion.div>

      {/* Trail effects - only show when hovering */}
      {isHovering &&
        trails.map((trail, index) => {
          const age = Date.now() - trail.timestamp;
          const opacity = Math.max(0, 1 - age / 800);
          const scale = Math.max(0.2, 1 - age / 1000);

          return (
            <motion.div
              key={trail.id}
              className="absolute pointer-events-none z-10"
              style={{
                left: trail.x,
                top: trail.y,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{
                opacity: opacity * 0.7,
                scale: scale * 0.6,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 blur-sm" />
            </motion.div>
          );
        })}

      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ boxShadow: "0 0 0px rgba(249, 115, 22, 0)" }}
        animate={
          isHovering
            ? {
                boxShadow: "0 0 40px rgba(249, 115, 22, 0.3)",
              }
            : {
                boxShadow: "0 0 0px rgba(249, 115, 22, 0)",
              }
        }
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
