import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, Trophy, Medal, ExternalLink } from "lucide-react";
import * as motion from "framer-motion/client";

export function Achievements() {
  const { achievements, certifications } = contentData;
  const achievementIcons = [Trophy, Award, Medal, Trophy];
  const allItems = [
    ...achievements.map(a => ({ ...a, type: 'achievement' })),
    ...certifications.map(c => ({ ...c, type: 'certification' }))
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Achievements & Certifications" subtitle="Recognition and credentials from leading organizations and hackathons" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allItems.map((item, idx) => {
            const Icon = item.type === 'achievement' ? achievementIcons[idx % achievementIcons.length] : Award;
            return (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/80 hover:border-primary/60 transition-all duration-300 p-6 rounded-2xl flex flex-col items-start shadow-sm hover:shadow-lg hover:shadow-primary/5 overflow-hidden cursor-pointer"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 w-full">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl mb-4 w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors pr-6 line-clamp-2">{item.title}</h3>
                  <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-3 block group-hover:text-foreground/70 transition-colors">
                    {((item as any).year || (item as any).issuer)}
                  </span>
                  {(item as any).details && (
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                      {(item as any).details}
                    </p>
                  )}

                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-semibold">View Credential</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  );
}
