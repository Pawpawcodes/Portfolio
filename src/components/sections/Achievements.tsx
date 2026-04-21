import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, Trophy, Medal } from "lucide-react";
import * as motion from "framer-motion/client";

export function Achievements() {
  const { achievements } = contentData;
  const icons = [Trophy, Award, Medal, Trophy];

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Achievements & Certifications" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border hover:border-primary/50 transition-colors p-6 rounded-3xl flex flex-col items-start shadow-sm"
              >
                <div className="p-4 bg-primary/10 text-primary rounded-2xl mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                  {item.year}
                </span>
                <p className="text-sm text-muted-foreground mt-auto">
                  {item.details}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
