import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import About from "@/src/components/sections/About";
import Skills from "@/src/components/sections/Skills";
import Stack from "@/src/components/sections/Stack";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/layout/Footer";
import CTA from "@/src/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Stack />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}