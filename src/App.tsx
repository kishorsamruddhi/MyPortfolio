import React from 'react';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const  App : React.FC = () => {
      const navItems = [
        { name: 'Home', id: 'intro' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Interests', id: 'interests' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
      ];

      const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <div className="min-h-screen bg-gray-100">
          <NavBar navItems={navItems} scrollToSection={scrollToSection} />
          <Intro />
          <About />
          <Skills />
          <Interests />
          <Experience />
          <Projects />
          <Footer />
        </div>
      );
    };

export default App;
