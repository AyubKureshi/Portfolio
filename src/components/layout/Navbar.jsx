import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const MotionNav = motion.nav;
const MotionDiv = motion.div;

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <MotionNav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-black/8 bg-brand-bg/80 backdrop-blur-md dark:border-white/10"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tighter text-pastel-text"
        >
          AK<span className="text-blue-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-brand-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:text-brand-primary"
            >
              {item}
            </a>
          ))}
          <ThemeToggle /> 
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-brand-card p-3 text-brand-text shadow-sm transition-colors hover:text-brand-primary dark:border-white/10 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-black/8 bg-brand-bg/95 px-4 pb-5 pt-3 shadow-lg dark:border-white/10 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-medium text-brand-text transition-colors hover:bg-brand-card hover:text-brand-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </MotionDiv>
      )}
    </MotionNav>
  );
};

export default Navbar;
