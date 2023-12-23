import AboutMe from './about-me';
import Projects from './projects';
import Career from './career';
import Award from './award';
import Contact from './contacts';

function Homepage() {
  return (
    <div className="flex flex-col gap-y-32 items-center relative justify-center  mx-auto  w-3/4 lg:w-[700px] md:w-[500px] xl:w-[1050px]">
      <AboutMe />
      <Career />
      <Projects />
      <Award />
      <Contact />
    </div>
  );
}

export default Homepage;
