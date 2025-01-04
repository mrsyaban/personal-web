import AboutMe from './about-me';
import Projects from './projects';
import Career from './career';
import Award from './award';
import Contact from './contacts';

function Homepage() {
  return (
    <div className="flex flex-col gap-y-16 sm:gap-y-32 items-center relative justify-center">
      <AboutMe />
      <Projects />
      <Career />
      <Award />
      <Contact />
    </div>
  );
}

export default Homepage;
