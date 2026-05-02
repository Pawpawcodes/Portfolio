"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-primary transform origin-left z-[100] shadow-lg shadow-primary/50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
