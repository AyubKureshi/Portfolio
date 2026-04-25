import { motion } from "framer-motion";

const MotionSection = motion.section;

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <MotionSection
      id={id}
      // ... motion props
      className={`py-20 px-6 md:px-12 max-w-6xl mx-auto bg-brand-bg text-brand-text ${className}`}
    >
      {children}
    </MotionSection>
  );
};

export default SectionWrapper;
