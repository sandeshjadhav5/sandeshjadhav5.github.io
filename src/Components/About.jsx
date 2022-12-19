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
import { CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <Heading textAlign="center" color="#48BB78" mt={59}>
        About Me
      </Heading>
      <Box w="80%" m="auto" mt="10">
        <List spacing={3}>
          <ListItem fontSize="20px" fontWeight="20px" lineHeight="2">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            As a MERN stack developer, I have proficiency in MongoDB, Express,
            React, and Node.js
          </ListItem>
          <ListItem fontSize="20px" fontWeight="20px" lineHeight="2">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Skilled in building dynamic and efficient web applications.
          </ListItem>
          <ListItem fontSize="20px" fontWeight="20px" lineHeight="2">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            skilled in Front-end and Back-end Development
          </ListItem>
          <ListItem fontSize="20px" fontWeight="20px" lineHeight="2">
            <ListIcon as={CheckCircleIcon} color="green.500" />I Have a strong
            understanding of the full web development cycle, from planning and
            design to deployment and maintenance.
          </ListItem>
          <ListItem fontSize="20px" fontWeight="20px" lineHeight="2">
            <ListIcon as={CheckCircleIcon} color="green.500" /> Able to work
            independently and as part of a team
          </ListItem>
          <ListItem fontSize="20px" fontWeight="20px" lineHeight="2">
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
