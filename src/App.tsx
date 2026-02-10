/* eslint-disable @typescript-eslint/no-unused-vars */
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import Welcome from "./components/sections/Welcome";

const App = () => {
  return (
    <div className=" ">
      {/* <Navbar /> */}
      <main className="">
        <section id="Welcome">
          <Welcome />
        </section>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
