import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function MainPage() {
  return (
    <>
        <section id="home" className="min-h-[calc(100vh-5rem)] md:scroll-mt-20 flex flex-col">
            <Home />
        </section>
        <section id="about" className="min-h-[calc(100vh-5rem)] md:scroll-mt-20 flex flex-col">
            <About />
        </section>
        <section id="experience" className="min-h-[calc(100vh-5rem)] md:scroll-mt-20 flex flex-col">
            <Experience />
        </section>
        <section id="skills" className="min-h-[calc(100vh-5rem)] md:scroll-mt-20 flex flex-col">
            <Skills />
        </section>
        <section id="projects" className="min-h-[calc(100vh-5rem)] md:scroll-mt-20 flex flex-col">
            <Projects />
        </section>
        <section id="contact" className="min-h-[calc(100vh-5rem)] md:scroll-mt-20 flex flex-col">
            <Contact />
        </section>
    </>
  )
}