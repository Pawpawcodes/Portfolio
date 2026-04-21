import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import * as motion from "framer-motion/client";

export function Skills() {
  const { skills } = contentData;

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Skills & Technologies" />
        
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
