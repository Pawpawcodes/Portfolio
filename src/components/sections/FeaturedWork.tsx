"use client";

import { useState } from "react";
import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = contentData.projects;

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A selection of case studies showcasing my approach to solving complex problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors shadow-sm hover:shadow-md flex flex-col"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="h-48 bg-muted border-b border-border relative overflow-hidden flex items-center justify-center p-6 text-center isolate">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-bold text-2xl text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500 drop-shadow-sm select-none">
                  {project.title.split("–")[0].trim().toUpperCase()}
                </h3>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground line-clamp-2 text-sm mb-4">
                  {project.solution}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-xs px-2 py-1 text-muted-foreground font-medium">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Case Study */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
              onClick={() => setSelectedProject(null)} 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl border border-border shadow-2xl flex flex-col"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)!;
                return (
                  <>
                    <div className="sticky top-0 right-0 p-4 flex justify-end z-10 pointer-events-none">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-muted text-foreground pointer-events-auto transition-colors shadow-sm"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    <div className="p-6 sm:p-10 -mt-12">
                      <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          {project.links?.github && (
                            <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                              <FaGithub size={16} /> Source Code
                            </a>
                          )}
                          {project.links?.live && (
                            <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                              <ExternalLink size={16} /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs">1</span>
                            The Problem
                          </h4>
                          <p className="text-muted-foreground leading-relaxed pl-8 border-l-2 border-border/50">{project.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs">2</span>
                            The Solution
                          </h4>
                          <p className="text-muted-foreground leading-relaxed pl-8 border-l-2 border-border/50">{project.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs">3</span>
                            The Impact
                          </h4>
                          <p className="text-muted-foreground leading-relaxed pl-8 border-l-2 border-border/50">{project.impact}</p>
                        </div>
                      </div>
                      
                      <div className="mt-12 pt-8 border-t border-border flex justify-center">
                         <button onClick={() => setSelectedProject(null)} className="px-6 py-2 rounded-full border border-border hover:bg-muted font-medium transition-colors">
                           Close Case Study
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
