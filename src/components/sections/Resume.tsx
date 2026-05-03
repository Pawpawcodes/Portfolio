"use client";

import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import * as motion from "framer-motion/client";
import { Download, ExternalLink } from "lucide-react";

export function Resume() {
  const resumes = contentData.resumes;

  const handleDownload = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Download Resume"
          subtitle="Choose the resume version that best fits your needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {resumes.map((resume, idx) => (
            <motion.div
              key={resume.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-2xl border border-border overflow-hidden bg-card/50 backdrop-blur hover:border-primary/50 transition-all shadow-sm hover:shadow-lg flex flex-col p-6 md:p-8`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${resume.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              {/* Icon and Title */}
              <div className="mb-4">
                <div className="text-4xl mb-3">{resume.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {resume.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {resume.description}
              </p>

              {/* File size indicator */}
              <div className="mb-6 text-xs text-muted-foreground/70">
                <span className="font-medium">{resume.filename}</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => handleDownload(resume.filename)}
                  className="flex-1 min-w-fit flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm group/btn"
                >
                  <Download size={16} className="group-hover/btn:translate-y-0.5 transition-transform" />
                  Download
                </button>
                <button
                  onClick={() => window.open(`/${resume.filename}`, '_blank')}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors text-sm"
                  title="Open in new tab"
                >
                  <ExternalLink size={16} />
                </button>
              </div>

              {/* Subtle hover indicator */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Download instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-xl bg-muted/50 border border-border/50"
        >
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-medium text-foreground">💡 Tip:</span> Click the download button to save the PDF, or click the external link icon to preview in a new tab.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
