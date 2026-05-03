"use client";

import { contentData } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Send, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const { contact } = contentData.about;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleSubmit = async (method: "email" | "whatsapp") => {
    if (method === "email") {
      setLoading(true);
      setStatus({ type: null, message: "" });

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus({
            type: "success",
            message: "✓ Message sent successfully! Check your email for confirmation.",
          });
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus({ type: null, message: "" }), 5000);
        } else {
          setStatus({
            type: "error",
            message: data.error || "Failed to send message. Please try WhatsApp instead.",
          });
        }
      } catch (error) {
        setStatus({
          type: "error",
          message: "Network error. Please try again or use WhatsApp.",
        });
      } finally {
        setLoading(false);
      }
    } else if (method === "whatsapp") {
      // Open WhatsApp with pre-filled message
      const whatsappMessage = `Hi Satakshi,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nYou can reach me at: ${formData.email}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/917578913115?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
    }
  };

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
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Hello Satakshi..."
                />
              </div>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${
                    status.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-700"
                      : "bg-red-500/10 border border-red-500/30 text-red-700"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleSubmit("email")}
                  disabled={loading || !formData.name || !formData.email || !formData.message}
                  className="group flex-1 py-4 rounded-xl bg-foreground text-background font-medium flex items-center justify-center gap-2 hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                >
                  {loading ? "Sending..." : "Send Email"}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit("whatsapp")}
                  disabled={!formData.name || !formData.message}
                  className="group flex-1 py-4 rounded-xl bg-green-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                >
                  WhatsApp
                  <MessageCircle size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
