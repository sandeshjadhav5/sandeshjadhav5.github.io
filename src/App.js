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
import {
  Spacer,
  Box,
  Heading,
  Image,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
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
      <Box
        w={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
        m="auto"
        mt="20"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <Heading textAlign="center" mt="85" mb="25" color="#38B2AC">
          GitHub Calender
        </Heading>
        <GitHubCalendar username="sandeshjadhav5" />
      </Box>
      <Heading
        textAlign="center"
        mt="35"
        mb="15"
        color="#38B2AC"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        GitHub Stats
      </Heading>
      <SimpleGrid
        w="90%"
        gap="2"
        m="auto"
        mt="10"
        minChildWidth="250px"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <Box>
          <Image
            m="auto"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=sandeshjadhav5"
          />
        </Box>
        <Box>
          <Image
            m="auto"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=sandeshjadhav5&show_icons=true&locale=en&layout=compact"
          />
        </Box>
        <Box>
          <Image
            m="auto"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=sandeshjadhav5&show_icons=true&theme=transparent"
          />
        </Box>
      </SimpleGrid>
      <Box w="80%" m="auto" data-aos="zoom-in" data-aos-duration="700"></Box>
      <Contact />
    </div>
  );
}

export default App;
