"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Return null or hide on strictly touch devices if it causes issues, but max-md:hidden covers most phones
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 hidden md:block border-2 border-foreground rounded-full pointer-events-none z-[100] transform"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 hidden md:block bg-foreground rounded-full pointer-events-none z-[100] transform"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.1,
        }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
