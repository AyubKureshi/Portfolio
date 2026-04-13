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

      <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        {expData.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-pastel-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Briefcase size={16} />
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-bold text-pastel-text text-lg">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-blue-400">
                  {exp.duration}
                </span>
              </div>
              <h4 className="text-pastel-muted font-medium mb-3">
                {exp.company}
              </h4>
              <p className="text-sm text-pastel-muted leading-relaxed">
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
