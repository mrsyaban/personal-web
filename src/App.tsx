import React from 'react';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-2/5 mx-auto">
      djad
      <NavBar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
