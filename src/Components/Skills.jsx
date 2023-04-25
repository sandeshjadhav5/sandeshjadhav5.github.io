import React from "react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

import {
  Grid,
  Box,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Skills = () => {
  const isDark = useSelector((state) => state.AppReducer.isDark);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="skills"
      style={
        isDark
          ? {
              backgroundColor: "#edf2f8",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }
          : {
              backgroundColor: "#1a202c",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }
      }
    >
      <Heading
        textAlign="center"
        mb="25"
        color="#48BB78"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        Skills
      </Heading>
      <SimpleGrid
        minChildWidth="140px"
        w="80%"
        m="auto"
        gap={6}
        mb="50"
        className="skillsDiv"
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://cdn.cdnlogo.com/logos/h/84/html.svg"
            m="auto"
            w="100px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            HTML
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/c/18/css.svg"
            m="auto"
            w="72px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            CSS
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/j/44/javascript.svg"
            m="auto"
            w="72px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            JavaScript
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/r/63/react.svg"
            m="auto"
            w="82px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            React
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/r/37/redux.svg"
            m="auto"
            w="82px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            Redux
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/m/25/mongodb.svg"
            m="auto"
            w="80px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            MongoDB
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/express.svg"
            m="auto"
            w="80px"
            h="50px"
          />

          <Text mt={5} fontWeight={600}>
            Express
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/n/79/node-js.svg"
            m="auto"
            w="80px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            Node JS
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            m="auto"
            w="80px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            Git
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            m="auto"
            w="60px"
            h="50px"
          />

          <Text mt={5} fontWeight={600}>
            TypeScript
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/04/cypress.png?fit=364%2C364&ssl=1"
            m="auto"
            w="70px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            Cypress
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
            m="auto"
            w="60px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            Chakra UI
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024"
            m="auto"
            w="60px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            BootStrap
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static-00.iconduck.com/assets.00/npm-icon-512x512-qtfdrf37.png"
            m="auto"
            w="60px"
            h="50px"
          />
          <Text mt={5} fontWeight={600}>
            npm
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Skills;
