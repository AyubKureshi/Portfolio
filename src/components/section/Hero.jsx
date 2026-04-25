import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionHeading = motion.h1;
const MotionParagraph = motion.p;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-linear-to-br from-pastel-bg via-pastel-lavender/30 to-pastel-blue/30">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="z-10 max-w-3xl"
      >
        <MotionSpan
          className="text-pastel-muted font-medium tracking-wider uppercase text-sm mb-4 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Computer Engineering Student
        </MotionSpan>

        <MotionHeading
          className="text-5xl md:text-7xl font-bold text-pastel-text mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            Ayub Kureshi
          </span>
        </MotionHeading>

        <MotionParagraph
          className="text-lg md:text-xl text-pastel-muted mb-10 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer | MERN Stack Enthusiast
          <br />
          Building modern web experiences with clean code and creative UI.
        </MotionParagraph>

        <MotionDiv
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-brand-primary text-white font-medium transition-all shadow-lg hover:brightness-110 hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-brand-card text-brand-text font-medium border border-black/8 transition-colors hover:border-brand-primary/30 hover:text-brand-primary dark:border-white/10"
          >
            Contact Me
          </a>
        </MotionDiv>
      </MotionDiv>

      {/* Scroll indicator */}
      <MotionDiv
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-pastel-muted" size={24} />
      </MotionDiv>
    </section>
  );
};

export default Hero;
