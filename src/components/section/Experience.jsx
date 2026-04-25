import SectionWrapper from "../ui/SectionWrapper";
import { Briefcase } from "lucide-react";

const expData = [
  {
    role: "Web Development Intern",
    company: "NueAI Labs",
    duration: "Jan 2025 - Feb 2025",
    description:
      "Developed and maintained responsive web interfaces. Collaborated with the team to integrate AI functionalities into web applications.",
  },
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    duration: "Jan 2026 - Feb 2026", 
    description:
      "Worked on building robust frontend components and optimized application performance for better user experience.",
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pastel-text">
        Experience
      </h2>

      <div className="relative mx-auto max-w-3xl space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent before:via-black/10 before:to-transparent dark:before:via-white/12 md:before:mx-auto md:before:translate-x-0">
        {expData.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-brand-bg bg-brand-primary text-white shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Briefcase size={16} />
            </div>

            <div className="w-[calc(100%-4rem)] rounded-2xl border border-black/8 bg-brand-card p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 md:w-[calc(50%-2.5rem)]">
              <div className="mb-2 flex flex-col justify-between md:flex-row md:items-center">
                <h3 className="text-lg font-bold text-brand-text">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-brand-primary">
                  {exp.duration}
                </span>
              </div>
              <h4 className="mb-3 font-medium text-brand-muted">
                {exp.company}
              </h4>
              <p className="text-sm leading-relaxed text-brand-muted">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
