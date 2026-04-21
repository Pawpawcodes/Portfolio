"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { contentData } from "@/data/content";
import { ArrowDown, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTexts = contentData.about.typingText;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = typingTexts[currentTextIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typingTexts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 animate-gradient bg-[length:200%_200%] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-500/30 dark:via-purple-500/30 dark:to-pink-500/30" />
      
      {/* Particles effect overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-sm font-medium"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2.5 animate-pulse"></span>
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70"
        >
          Hi, I&apos;m {contentData.about.name.split(" ")[0]}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-20 md:h-16 mb-10 flex flex-col md:flex-row justify-center items-center text-xl md:text-3xl text-muted-foreground font-light"
        >
          <span className="mb-2 md:mb-0 md:mr-3">{contentData.about.tagline.split('|')[0].trim()}</span>
          <span className="hidden md:inline mx-3 text-border">|</span>
          <span className="font-semibold text-foreground">
            {currentText}
            <span className="animate-blink text-primary">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="rounded-full bg-foreground text-background px-8 py-3.5 font-medium hover:scale-105 transition-transform shadow-lg shadow-black/10 dark:shadow-none"
          >
            View Work
          </a>
          <a
            href={contentData.about.contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-full border border-border hover:bg-muted transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={contentData.about.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-full border border-border hover:bg-muted transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground p-2 block">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
