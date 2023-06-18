import React from 'react';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Career from './components/Career';
import Contact from './components/Contacts';

function App() {
  return (
    <div className="flex flex-col items-center relative justify-center  mx-auto  w-[250px] lg:w-[700px] xl:w-[950px] md:w-[500px]">
      <NavBar />
      <AboutMe />
      <Projects />
      <Career/>
      <Contact/>
    </div>
  );
}

export default App;
