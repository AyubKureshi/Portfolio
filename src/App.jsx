import Navbar from "./components/layout/Navbar";
import Hero from "./components/section/Hero";
import Projects from "./components/section/Projects";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Experience from "./components/section/Experience";
import Education from "./components/section/Education";
import Contact from "./components/section/Contact";

function App() {
  return (
    <div className="min-h-screen bg-pastel-bg font-sans selection:bg-pastel-blue selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="mt-20 border-t border-gray-200/50 py-8 text-center text-sm text-pastel-muted">
        <p>&copy; 2026 Ayub Kadir Kureshi. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
