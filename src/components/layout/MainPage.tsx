import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function MainPage() {
  return (
    <>
        <section id="home" className="min-h-screen scroll-mt-25">
            <Home />
        </section>
        <section id="about" className="min-h-screen scroll-mt-25">
            <About />
        </section>
        <section id="skills" className="min-h-screen scroll-mt-25">
            <Skills />
        </section>
        <section id="projects" className="min-h-screen scroll-mt-25">
            <Projects />
        </section>
        <section id="experience" className="min-h-screen scroll-mt-25">
            <Experience />
        </section>
        <section id="contact" className="min-h-screen scroll-mt-25">
            <Contact />
        </section>
    </>
  )
}