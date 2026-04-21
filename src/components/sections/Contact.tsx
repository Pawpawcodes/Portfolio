"use client";

import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export function Contact() {
  const { contact } = contentData.about;

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading title="Get In Touch" subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" />
        
        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Let&apos;s Connect</h3>
              <p className="text-muted-foreground">Feel free to reach out for collaborations or just a friendly chat.</p>
            </div>
            
            <div className="space-y-4">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-4 rounded-2xl bg-card border border-border shadow-sm">
                <Mail size={24} />
                <span className="font-medium">{contact.email}</span>
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-4 rounded-2xl bg-card border border-border shadow-sm">
                <FaGithub size={24} />
                <span className="font-medium">GitHub</span>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-4 rounded-2xl bg-card border border-border shadow-sm">
                <FaLinkedin size={24} />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form className="bg-card p-8 rounded-3xl border border-border flex flex-col space-y-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input type="text" id="name" className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input type="email" id="email" className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={5} className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Hello Satakshi..."></textarea>
              </div>
              <button type="button" className="group w-full py-4 rounded-xl bg-foreground text-background font-medium flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all hover:scale-[1.02]">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
