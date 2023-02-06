import "./App.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import GitHubCalendar from "react-github-calendar";
import { Routes, Route } from "react-router-dom";
import { Spacer, Box, Heading, Image } from "@chakra-ui/react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Spacer h={50} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Box w="60%" m="auto" mt="20" data-aos="zoom-in" data-aos-duration="700">
        <Heading textAlign="center" mt="85" mb="25" color="#38B2AC">
          GitHub Calender
        </Heading>
        <GitHubCalendar username="sandeshjadhav5" />
      </Box>
      <Box w="80%" m="auto" data-aos="zoom-in" data-aos-duration="700">
        <Heading textAlign="center" mt="35" mb="25" color="#38B2AC">
          GitHub Stats
        </Heading>
        <Image
          m="auto"
          src="https://github-readme-stats.vercel.app/api?username=sandeshjadhav5&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=radical"
        />
      </Box>

      <Contact />
    </div>
  );
}

export default App;
