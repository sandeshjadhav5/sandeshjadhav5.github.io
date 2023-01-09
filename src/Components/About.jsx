import { Box, Heading, Spacer, Text } from "@chakra-ui/react";
import {
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about">
      <Heading
        textAlign="center"
        color="#48BB78"
        mt={59}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="600"
      >
        About Me
      </Heading>
      <Box w="80%" m="auto" mt="10">
        <List spacing={3}>
          <ListItem
            fontSize="20px"
            fontWeight="20px"
            lineHeight="2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="600"
          >
            <ListIcon as={CheckCircleIcon} color="green.500" />
            As a MERN stack developer, I have proficiency in MongoDB, Express,
            React, and Node.js
          </ListItem>
          <ListItem
            fontSize="20px"
            fontWeight="20px"
            lineHeight="2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="600"
          >
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Skilled in building dynamic and efficient web applications.
          </ListItem>
          <ListItem
            fontSize="20px"
            fontWeight="20px"
            lineHeight="2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="600"
          >
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Skilled in Front-end and Back-end Development
          </ListItem>
          <ListItem
            fontSize="20px"
            fontWeight="20px"
            lineHeight="2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="600"
          >
            <ListIcon as={CheckCircleIcon} color="green.500" />I Have a strong
            understanding of full web development cycle from planning, design to
            deployment & maintainance.
          </ListItem>
          <ListItem
            fontSize="20px"
            fontWeight="20px"
            lineHeight="2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="600"
          >
            <ListIcon as={CheckCircleIcon} color="green.500" /> Able to work
            independently and as part of a team
          </ListItem>
          <ListItem
            fontSize="20px"
            fontWeight="20px"
            lineHeight="2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="600"
          >
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Always looking for ways to improve and expand my knowledge and
            skills.
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default About;
