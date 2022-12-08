import { Heading, Spacer, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import profileImg from "../Images/sandy2.png";
import { Link } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
// const breakpoints = {
//   sm: "320px",
//   md: "768px",
//   lg: "960px",
//   xl: "1200px",
//   "2xl": "1536px",
// };
//const theme = extendTheme({ breakpoints });
const Home = () => {
  return (
    <div id="home">
      <Spacer h={55} />
      <Box p={10} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ lg: "450px", md: "400px" }}
            src={profileImg}
            alt="Sandesh Jadhav"
          />
        </Box>
        <Box mt={{ base: 4, md: 30, lg: 35, xl: 40 }} ml={{ md: 6, xl: 65 }}>
          <Text
            fontWeight="bold"
            fontSize={{ xl: "50", lg: "45", md: "40", sm: "40" }}
            letterSpacing="wide"
            color="#E53E3E"
            textAlign={{ sm: "center", md: "left" }}
          >
            Hii, I'am Sandesh Jadhav
          </Text>
          <Text
            mt={1}
            display="block"
            fontSize="30"
            lineHeight="normal"
            fontWeight="semibold"
            textAlign={{ sm: "center", md: "left" }}
          >
            Full Stack Developer
          </Text>
          <Text
            mt={2}
            color="gray.500"
            fontSize={{ xl: "20", lg: "20", md: "20", sm: "15" }}
            textAlign={{ sm: "center", md: "left" }}
          >
            Iam a Full Stack Web Devloper based in India.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

//<img src={profileImg} className="profileImg" alt="profile" />
