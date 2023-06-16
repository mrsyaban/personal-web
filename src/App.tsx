import React from 'react';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Career from './components/Career';
import Contact from './components/Contacts';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-[250px] xl:w-[1000px] mx-auto md:w-[500px]">
      <NavBar />
      <AboutMe />
      <Projects />
      <Career/>
      <Contact/>
    </div>
  );
}

export default App;
