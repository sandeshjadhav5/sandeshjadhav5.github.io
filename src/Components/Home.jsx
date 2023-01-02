import { Heading, Spacer, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import profileImg from "../Images/sandyNewImg.png";
import { Link } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home">
      <Spacer h={55} />
      <Box p={10} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ lg: "450px", md: "400px" }}
            src="https://sandeshjadhav5.github.io/static/media/sandyNewImg.db9d1db5e6aa4b8ed921.png"
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
            Hii, I Am Sandesh Jadhav
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
          <Text
            mt={2}
            color="gray.500"
            fontSize={{ xl: "20", lg: "20", md: "20", sm: "15", base: "12.5" }}
            textAlign={{ sm: "center", md: "left", base: "center" }}
          >
            Full Stack Web Devloper based in India.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

//<img src={profileImg} className="profileImg" alt="profile" />
