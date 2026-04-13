import { motion } from "framer-motion";

const MotionSection = motion.section;

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <MotionSection
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-6 md:px-12 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </MotionSection>
  );
};

export default SectionWrapper;
