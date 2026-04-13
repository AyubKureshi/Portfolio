import SectionWrapper from "../ui/SectionWrapper";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pastel-text">
        Education
      </h2>

      <div className="max-w-2xl mx-auto">
        <div className="relative p-8 rounded-3xl bg-linear-to-br from-white to-pastel-bg border border-gray-100 shadow-sm overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pastel-mint/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="p-4 bg-pastel-blue/20 text-blue-500 rounded-2xl">
              <GraduationCap size={32} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-pastel-text">
                  B.E. Computer Engineering
                </h3>
                <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-pastel-muted mt-2 md:mt-0 inline-block w-fit">
                  2022 — 2026
                </span>
              </div>
              <h4 className="text-lg text-pastel-muted mb-4">
                Sinhgad College of Engineering
              </h4>

              <div className="inline-flex items-center px-4 py-2 bg-pastel-lavender/30 rounded-xl">
                <span className="text-sm font-semibold text-pastel-text">
                  Current CGPA:
                </span>
                <span className="ml-2 text-lg font-bold text-blue-500">
                  8.55
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
