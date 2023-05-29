/* eslint-disable react/prop-types */
import { Showreel, Projects, About } from "./";

const Home = ({ showreel, projects, about }) => {
  return (
    <>
      <Showreel data={showreel} />
      <Projects data={projects} />
      <About data={about} />
    </>
  );
};

export default Home;
