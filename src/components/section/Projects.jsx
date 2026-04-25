import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "CYBERVISION",
    description:
      "An AI-assisted automated web penetration testing system designed for vulnerability detection and forensic data validation. Features automated SQLi and XSS scanning with detailed reporting.",
    tech: ["Python", "MERN Stack", "AI Orchestration", "Cybersecurity"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/AyubKureshi/cyberV",
    live: "#",
    featured: true,
  },
  {
    title: "Campus Connect",
    description:
      "A collaborative platform for university students to showcase academic projects, find teammates, and communicate in real-time.",
    tech: ["MERN Stack", "Socket.io", "Tailwind CSS", "Redux"],
    image:
      "https://images.unsplash.com/photo-1714976326729-1ffbddfc1c2e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=800&q=80", // Team/Campus vibe
    github: "https://github.com/AyubKureshi/Campus-Connect",
    live: "#",
  },
  {
    title: "Uber Clone",
    description:
      "A real-time ride-sharing platform with map integration, live driver-rider communication, and secure authentication.",
    tech: ["MERN", "Socket.io", "Google Maps", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Car/City vibe
    github: "https://github.com/AyubKureshi/Uber-Clone",
    live: "#",
  },
  {
    title: "AI Chat Application",
    description:
      "A modern conversational interface powered by generative AI, featuring seamless responses and a beautiful UI.",
    tech: ["React", "Node.js", "Gemini API", "Express"],
    image:
      "https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // AI/Tech vibe
    github: "#",
    live: "#",
  },
  {
    title: "Recipe Book",
    description:
      "A full-stack application for discovering, saving, and managing recipes with complete CRUD functionality.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80", // Food/Cooking vibe
    github: "https://github.com/AyubKureshi/newRB",
    live: "https://newrb-frontend.onrender.com/",
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pastel-text">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-brand-card rounded-3xl overflow-hidden shadow-sm border border-black/8 hover:shadow-xl transition-all duration-300 group flex flex-col h-full dark:border-white/10"
          >
            {/* Image Container with Hover Scale */}
            <div className="w-full h-56 overflow-hidden bg-brand-bg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex flex-col grow">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-brand-text group-hover:text-brand-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-brand-muted mb-6 grow text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 pt-5 mt-auto border-t border-black/8 dark:border-white/10">
                <a
                  href={project.github}
                  className="flex items-center text-sm font-semibold text-brand-muted hover:text-brand-text transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.3 9.41 7.88 10.94.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.21.7-3.89-1.36-3.89-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
                  </svg>{" "}
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center text-sm font-semibold text-brand-muted hover:text-brand-primary transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
