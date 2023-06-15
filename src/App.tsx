import React from 'react';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Career from './components/Career';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-2/5 mx-auto">
      <NavBar />
      <AboutMe />
      <Projects />
      <Career/>
    </div>
  );
}

export default App;
