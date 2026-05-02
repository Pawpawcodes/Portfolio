import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Briefcase } from "lucide-react";
import * as motion from "framer-motion/client";

export function Experience() {
  const { experience } = contentData;

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <SectionHeading title="Experience" subtitle="Full-time roles and internships building production systems" />

        <div className="relative space-y-8">
          {/* Timeline line with gradient */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline dot with pulse */}
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-[9.5px] md:-left-[8.5px] top-2 shadow-lg shadow-primary/30 ring-4 ring-background group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-[9.5px] md:-left-[8.5px] top-2 animate-pulse opacity-50" />

              {/* Card */}
              <div className="ml-8 md:ml-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                      <h4 className="text-base text-primary font-semibold mt-1">{exp.company}</h4>
                    </div>
                  </div>
                  <span className="shrink-0 font-semibold bg-primary/10 text-primary px-4 py-2 rounded-full text-sm group-hover:bg-primary/20 transition-colors">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {exp.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
