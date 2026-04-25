import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

const MotionDiv = motion.div;

const skillsData = [
  { category: "Languages", items: ["Python", "JavaScript", "Java"] },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Database", items: ["MongoDB", "SQL"] },
  {
    category: "Core & Tools",
    items: ["DSA", "REST APIs", "JWT Auth", "Git", "Postman"],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="rounded-3xl bg-brand-card/60">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pastel-text">
        Technical Arsenal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skillGroup, index) => (
          <MotionDiv
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-brand-card border border-black/8 shadow-sm transition-colors dark:border-white/10"
          >
            <h3 className="text-lg font-semibold mb-4 text-brand-text border-b border-black/8 pb-2 dark:border-white/10">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm bg-brand-bg text-brand-text rounded-lg border border-black/8 dark:border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
