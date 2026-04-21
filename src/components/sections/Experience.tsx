import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import * as motion from "framer-motion/client";

export function Experience() {
  const { experience } = contentData;

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading title="Experience" />
        
        <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8.5px] top-1.5 shadow-md shadow-primary/20" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl pr-4 font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm shrink-0 font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg text-primary font-medium mb-4">{exp.company}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {exp.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
