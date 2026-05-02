"use client";

import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export function Contact() {
  const { contact } = contentData.about;

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Looking for collaborations or just want to chat? I'm always open to interesting opportunities." />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed">Reach out for opportunities, collaborations, or just to discuss ideas. I'll respond within 24 hours.</p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Mail, href: `mailto:${contact.email}`, label: contact.email, title: "Email" },
                { icon: FaGithub, href: contact.github, label: "View my work", title: "GitHub" },
                { icon: FaLinkedin, href: contact.linkedin, label: "Connect with me", title: "LinkedIn" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.title !== "Email" ? "_blank" : undefined}
                    rel={item.title !== "Email" ? "noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/40 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</div>
                      <div className="text-xs text-muted-foreground truncate">{item.label}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 flex flex-col space-y-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/30">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder-muted-foreground/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder-muted-foreground/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none placeholder-muted-foreground/50"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full py-4 rounded-xl bg-gradient-to-r from-foreground to-foreground/90 text-background font-semibold flex items-center justify-center gap-2 hover:shadow-lg shadow-foreground/20 transition-all"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
