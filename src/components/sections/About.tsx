import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import * as motion from "framer-motion/client";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" />
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert"
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {contentData.about.intro}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative isolate shadow-xl">
              <Image 
                src="/images/profile.jpg" 
                alt="Satakshi Roy" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative items */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
