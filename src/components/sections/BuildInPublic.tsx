import { SectionHeading } from "@/components/SectionHeading";
import * as motion from "framer-motion/client";
import Image from "next/image";

export function BuildInPublic() {
  const photos = [
    { src: "/images/_ASG5888.jpg", alt: "Engaging at E-Summit" },
    { src: "/images/_DSC9644.JPG", alt: "Team Discussion & Strategy" },
    { src: "/images/_DSC9647.JPG", alt: "Presenting the MVP" },
    { src: "/images/1.jpeg", alt: "SDIS Team Showcase" },
    { src: "/images/2.jpeg", alt: "Event Panel Discussion" },
    { src: "/images/3.jpeg", alt: "Innovation Pitch Round" },
    { src: "/images/4.jpeg", alt: "Workshop Session" },
    { src: "/images/5.jpeg", alt: "Hackathon Participation" },
    { src: "/images/6.jpeg", alt: "Project Presentation" },
    { src: "/images/7.jpeg", alt: "Team Collaboration Moment" },
    { src: "/images/Esummit1.jpg", alt: "E-Summit Opening Ceremony" },
    { src: "/images/esummit2.JPG", alt: "E-Summit Keynote Session" },
    { src: "/images/esummit4.JPG", alt: "E-Summit Panel Discussion" },
    { src: "/images/esummit5.JPG", alt: "E-Summit Networking" },
    { src: "/images/esummit6.JPG", alt: "E-Summit Team Meeting" },
    { src: "/images/esummit7.JPG", alt: "E-Summit Project Showcase" },
    { src: "/images/esummit8.JPG", alt: "E-Summit Recognition" },
    { src: "/images/esummit9.JPG", alt: "E-Summit Closing Ceremony" },
    { src: "/images/IMG_9667.JPG", alt: "Hackathon Pitch Session" },
    { src: "/images/profile.jpg", alt: "Professional Portrait" },
  ];

  return (
    <section id="vlog" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Build in Public" subtitle="Moments from hackathons, pitches, and my continuous learning journey." />
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all bg-muted inline-block w-full"
            >
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-2 lg:translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white font-medium text-lg drop-shadow-md">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
