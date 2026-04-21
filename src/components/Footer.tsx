import { contentData } from "@/data/content";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {contentData.about.name}. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href={contentData.about.contact.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={contentData.about.contact.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${contentData.about.contact.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
