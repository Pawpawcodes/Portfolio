import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="About Me" subtitle="Shipping production-grade systems and automation infrastructure at scale" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {contentData.about.intro}
            </p>

            {/* Highlight boxes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { label: "3+ Systems", value: "Shipped" },
                { label: "80%", value: "Manual Effort Reduced" },
                { label: "Production-Grade", value: "Code Quality" }
              ].map((stat, i) => (
                <div key={i} className="bg-primary/10 border border-primary/20 rounded-xl p-3 text-center hover:bg-primary/15 transition-colors">
                  <div className="text-sm font-bold text-primary">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted relative isolate shadow-xl border border-border/50 group">
              <Image
                src="/images/profile.jpg"
                alt="Satakshi Roy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative items */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-foreground text-background px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
            >
              <Sparkles size={16} />
              <span className="text-sm font-semibold">Available Now</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
