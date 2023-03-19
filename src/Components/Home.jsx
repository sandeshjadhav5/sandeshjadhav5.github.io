import { Heading, Spacer, Box, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const textRef = useRef();
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 70,
      strings: [
        "Full Stack Developer",
        "Problem Solver",
        "MERN Stack Developer",
      ],
    });
  }, []);
  return (
    <div id="home">
      <Spacer h={55} />
      <Box p={10} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ lg: "450px", md: "400px" }}
            src="https://i.imgur.com/ltoxfkx.png"
            alt="Sandesh Jadhav"
          />
        </Box>
        <Box mt={{ base: 4, md: 30, lg: 35, xl: 40 }} ml={{ md: 6, xl: 65 }}>
          <Text
            fontWeight="bold"
            fontSize={{ xl: "55", lg: "45", md: "45", sm: "45", base: "25" }}
            letterSpacing="wide"
            color="#E53E3E"
            textAlign={{ sm: "center", md: "left", base: "center" }}
          >
            Hi, I Am Sandesh Jadhav
          </Text>
          <Text
            mt={1}
            display="block"
            fontSize={{ xl: "40", lg: "40", md: "35", sm: "30", base: "15" }}
            lineHeight="normal"
            fontWeight="semibold"
            textAlign={{ sm: "center", md: "left", base: "center" }}
          >
            Full Stack Developer
          </Text>
          <Box>
            <Text
              mt={2}
              color="#4A5568"
              fontWeight="semibold"
              fontSize={{
                xl: "25",
                lg: "25",
                md: "25",
                sm: "20",
                base: "15",
              }}
              textAlign={{ sm: "center", md: "left", base: "center" }}
            >
              I'm a <span style={{ color: "#E53E3E" }} ref={textRef}></span>
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
