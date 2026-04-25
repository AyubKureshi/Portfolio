import SectionWrapper from "../ui/SectionWrapper";
import { Terminal, Lightbulb, Code2 } from "lucide-react";

const About = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pastel-text">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6 text-lg text-pastel-muted font-light leading-relaxed">
          <p>
            Hello! I'm Ayub, a final-year Computer Engineering student with a
            deep passion for building scalable web applications and exploring
            the potential of Artificial Intelligence.
          </p>
          <p>
            Throughout my academic journey (currently holding an 8.55 CGPA),
            I've cultivated a strong foundation in problem-solving and software
            architecture. I specialize in the MERN stack, bridging the gap
            between robust backend logic and clean, intuitive user interfaces.
          </p>
          <p>
            When I'm not writing code or debugging, you can find me exploring
            new tech stacks or conceptualizing my next project. I believe that
            good software should not only work flawlessly but also provide a
            seamless, aesthetic experience for the user.
          </p>
        </div>

        <div className="flex-1 w-full grid gap-4">
          {[
            {
              icon: <Code2 />,
              title: "Clean Code",
              desc: "Writing maintainable, scalable, and modular code.",
            },
            {
              icon: <Lightbulb />,
              title: "Problem Solving",
              desc: "Translating complex problems into efficient digital solutions.",
            },
            {
              icon: <Terminal />,
              title: "MERN Stack",
              desc: "End-to-end development from database to dynamic UI.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-black/8 bg-brand-card p-5 shadow-sm dark:border-white/10"
            >
              <div className="rounded-xl bg-brand-primary/12 p-3 text-brand-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-brand-text">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
