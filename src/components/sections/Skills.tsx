import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import * as motion from "framer-motion/client";

export function Skills() {
  const { skills } = contentData;

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Skills & Technologies" subtitle="Languages, frameworks, and infrastructure expertise" />

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 group-hover:border-primary/30 transition-all">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 text-background flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{skillGroup.category}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                      className="px-4 py-2 bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20 rounded-full text-sm font-semibold text-foreground hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-sm cursor-default group-hover:shadow-md"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
