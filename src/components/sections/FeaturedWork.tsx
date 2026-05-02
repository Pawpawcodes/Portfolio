"use client";

import { useState } from "react";
import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = contentData.projects;

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Featured Work"
          subtitle="Production-grade systems shipping real impact at scale"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative cursor-pointer rounded-2xl bg-card/50 backdrop-blur-sm border border-border/80 overflow-hidden hover:border-primary/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border/50 relative overflow-hidden flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-black text-xl sm:text-2xl text-foreground/20 group-hover:text-foreground/40 transition-all duration-500 drop-shadow-sm select-none">
                  {project.title.split("–")[0].trim()}
                </h3>
              </div>

              <div className="p-6 flex-grow flex flex-col relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">{project.title}</h3>
                <p className="text-muted-foreground line-clamp-2 text-sm mb-4 group-hover:text-foreground/80 transition-colors">
                  {project.description}
                </p>

                {/* Key metrics */}
                <div className="mb-4 space-y-2">
                  {project.metrics?.slice(0, 2).map((metric, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors">
                      <Zap size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto mb-3">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-secondary/70 text-secondary-foreground rounded-md group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-xs px-2 py-1 text-muted-foreground font-medium group-hover:text-primary/70 transition-colors">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-lg"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 30 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl border border-border shadow-2xl flex flex-col"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)!;
                return (
                  <>
                    <div className="sticky top-0 right-0 p-6 flex justify-end z-10 pointer-events-none bg-card/80 backdrop-blur border-b border-border/30">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 rounded-full bg-background/90 backdrop-blur border border-border hover:bg-muted text-foreground pointer-events-auto transition-all duration-200 hover:scale-110"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="p-6 sm:p-10">
                      <div className="mb-8">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">{project.title}</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map(t => (
                            <span key={t} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 flex-wrap">
                          {project.links?.github && (
                            <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
                              <FaGithub size={16} /> View Code
                            </a>
                          )}
                          {project.links?.live && (
                            <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200">
                              <ExternalLink size={16} /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="space-y-8">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h4 className="text-lg font-bold text-foreground mb-3">Overview</h4>
                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-lg font-bold text-foreground mb-4">Key Metrics & Impact</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.metrics?.map((metric, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + i * 0.05 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20"
                              >
                                <Zap size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/90 font-medium">{metric}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      <div className="mt-12 pt-8 border-t border-border flex justify-center">
                        <button onClick={() => setSelectedProject(null)} className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-background font-bold transition-all duration-200 hover:shadow-lg">
                          Close Project
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
