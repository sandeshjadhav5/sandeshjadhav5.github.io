import React from "react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import nykaa from "../Images/nykaaProject.png";
import sephora from "../Images/sephora.png";
import myntra from "../Images/myntra.png";
import youtubeClone from "../Images/youtubeClone.png";
import bathBodyWorks from "../Images/bathBodyWorks.png";
import { useSelector } from "react-redux";

import { LinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Grid,
  Box,
  Image,
  Badge,
  Text,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Projects = () => {
  const isDark = useSelector((state) => state.AppReducer.isDark);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="projects">
      <Heading
        mt="95"
        m="auto"
        mb="30"
        textAlign="center"
        color="#48BB78"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        Projects
      </Heading>
      <SimpleGrid
        minChildWidth="320px"
        gap="35"
        w="80%"
        m="auto"
        fontWeight="bold"
      >
        <Box m="auto">
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <Image src={bathBodyWorks} alt="bathBodyWorks" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#822727" fontSize="25">
                  Bath & Body Works Website Clone
                </Text>
              </Box>

              <Box fontWeight="semibold">
                An Ecommerce web application to buy Bath,Hygiene related
                products, created in five days with team of Four members in
                which i have built Products Page & Admin Side
              </Box>
            </Box>
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                REACT
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                REDUX
              </Badge>

              <Badge borderRadius="full" px="2" colorScheme="teal">
                CHAKRA UI
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Rest API
              </Badge>
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt="5" mb="3">
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://bathbodyworksbymasai.netlify.app/"
                  target={"_blank"}
                >
                  Deployed
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://github.com/sandeshjadhav5/careless-tiger-9091"
                  target="_blank"
                >
                  Github
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box m="auto">
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <Image src="https://i.imgur.com/1TPdAo8.jpg" alt="classroomApp" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#822727" fontSize="25">
                  Classroom App
                </Text>
              </Box>

              <Box fontWeight="semibold">
                Webapp created for Client, where students can join class and
                study online ,View contents inside class . Teachers can create
                New Classes,Update and Delete new notes inside this classes.
              </Box>
            </Box>
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                MongoDB
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Express
              </Badge>

              <Badge borderRadius="full" px="2" colorScheme="teal">
                React
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Node JS
              </Badge>
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt="5" mb="3">
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://you-can-test-classroom-app.netlify.app/"
                  target={"_blank"}
                >
                  Deployed
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://github.com/sandeshjadhav5/classroom-app"
                  target="_blank"
                >
                  Github
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box m="auto">
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <Image src="https://i.imgur.com/w3NzfPt.png" alt="atozAmazon" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#822727" fontSize="25">
                  Amazon Website Clone
                </Text>
              </Box>

              <Box fontWeight="semibold">
                Clone of E-commerce Web Application Amazon which sells all kinds
                of products.Created with team of Five members within Five days
                using MERN Stack
              </Box>
            </Box>
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                MongoDB
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Express
              </Badge>

              <Badge borderRadius="full" px="2" colorScheme="teal">
                React
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Node JS
              </Badge>
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt="5" mb="3">
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a href="https://atozamazon.netlify.app/" target={"_blank"}>
                  Deployed
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://github.com/Channa47/reflective-decision-5937"
                  target="_blank"
                >
                  Github
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box m="auto">
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <Image src={nykaa} alt="nykaa" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#822727" fontSize="25">
                  Nykaa Clone
                </Text>
              </Box>

              <Box fontWeight="semibold">
                An Ecommerce web application to buy Beauty and Makeup
                products,created in five days in which i have built
                Home,Products,Login,SignUp and Cart Page.
              </Box>
            </Box>
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                REACT
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                JAVASCRIPT
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                CHAKRA UI
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Rest API
              </Badge>
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt="5" mb="3">
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://nykaawebsitebysandesh.netlify.app/"
                  target={"_blank"}
                >
                  Deployed
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://github.com/sandeshjadhav5/choice-rice-2961/tree/main/nykaa-clone"
                  target="_blank"
                >
                  Github
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box m="auto">
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <Image src={myntra} alt="myntraa" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#822727" fontSize="25">
                  Myntra Website Clone
                </Text>
              </Box>

              <Box fontWeight="semibold">
                An Ecommerce web application to buy Clothing and Fashion
                Accessories products,created in five days in which with team of
                Four Members in which i have created Producs Page
              </Box>
            </Box>

            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                JAVASCRIPT
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                HTML
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                CSS
              </Badge>
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt="5" mb="3">
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a href="https://myntraclonemasai.netlify.app/" target="_blank">
                  Deployed
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://github.com/sandeshjadhav5/exotic-tail-7975"
                  target="_blank"
                >
                  Github
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box m="auto">
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <Image src={sephora} alt="nykaa" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#822727" fontSize="25">
                  Sephora Website Clone
                </Text>
              </Box>

              <Box fontWeight="semibold">
                An Ecommerce web application to buy Beauty and Makeup
                products,created in five days in which i have built
                Home,Products,Login,SignUp and Cart Page.
              </Box>
            </Box>

            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                JAVASCRIPT
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                HTML
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                CSS
              </Badge>
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt="5" mb="3">
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://idyllic-gecko-b72868.netlify.app/"
                  target="_blank"
                >
                  Deployed
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://github.com/sandeshjadhav5/billowing-toothbrush-6922"
                  target="_blank"
                >
                  Github
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Projects;
