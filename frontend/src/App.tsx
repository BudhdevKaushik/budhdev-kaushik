import { motion } from "framer-motion";
import "./index.css";
// import { navLinks } from "./constants";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorFollower from "./components/CursorFollower";
import FloatingElements from "./components/FloatingElements";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col">
      <AnimatedBackground />
      <FloatingElements />
      <CursorFollower />

      <Navbar />

      <main className="container mx-auto px-4 flex-grow">
        <SectionWrapper id="home">
          <Hero />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        {/* <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper> */}

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="min-h-screen py-6 md:py-10 px-4 flex flex-col justify-center"
  >
    {children}
  </motion.section>
);

export default App;
