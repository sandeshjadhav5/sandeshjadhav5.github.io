import {
  Heading,
  Spacer,
  Box,
  Image,
  Text,
  Button,
  background,
  color,
} from "@chakra-ui/react";
import React from "react";
import { init } from "ityped";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { changeColorMode } from "../Redux/AppReducer/action";

import { Link } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState(true);
  const textRef = useRef();

  const isDark = useSelector((state) => state.AppReducer.isDark);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 100,
      strings: [
        "Full Stack Developer",
        "Problem Solver",
        "MERN Stack Developer",
      ],
    });
  }, []);

  return (
    <div
      id="home"
      style={
        isDark
          ? { backgroundColor: "#edf2f8", height: "100vh" }
          : { backgroundColor: "#1a202c" }
      }
    >
      <Spacer h={55} />
      <Box p={10} display={{ md: "flex" }}>
        <Box flexShrink={0} data-aos="fade-left" data-aos-duration="900">
          <Image
            borderRadius="lg"
            width={{ lg: "450px", md: "400px", sm: "500px", base: "500px" }}
            src="https://i.imgur.com/ltoxfkx.png"
            alt="Sandesh Jadhav"
          />
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-duration="900"
          mt={{ base: 20, md: 30, lg: 35, xl: 40 }}
          ml={{ md: 6, xl: 65 }}
        >
          <Text
            fontWeight="bold"
            fontSize={{ xl: "55", lg: "45", md: "45", sm: "45", base: "50" }}
            letterSpacing="wide"
            color="#E53E3E"
            textAlign={{ sm: "center", md: "left", base: "center" }}
            backgroundImage="url('https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2cf549433129d4227d1879347b9e78ce&auto=format&fit=crop&w=1248&q=80')"
            backgroundPosition="center"
            backgroundRepeat="repeat"
            animation="animate 20s ease-in-out infinite"
            bgClip="text"
          >
            Hi, I Am Sandesh Jadhav
          </Text>
          <Text
            mt={1}
            display="block"
            fontSize={{ xl: "40", lg: "40", md: "35", sm: "30", base: "25" }}
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
