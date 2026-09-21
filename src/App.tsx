import Navbar from '@/components/Navbar';
import CursorGlow from '@/components/CursorGlow';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Robotics from '@/components/Robotics';
import Achievements from '@/components/Achievements';
import WhatIStudy from '@/components/WhatIStudy';
import CareerJourney from '@/components/CareerJourney';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import GitHubSection from '@/components/GitHubSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Robotics />
        <Achievements />
        <WhatIStudy />
        <CareerJourney />
        <Experience />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
