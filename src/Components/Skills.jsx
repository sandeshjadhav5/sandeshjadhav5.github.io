import React from "react";
import { motion } from "framer-motion";
import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import html5 from "../Images/html-5.svg";
import css3 from "../Images/css-3.svg";
import javaScript from "../Images/javascript.svg";
import react from "../Images/react.svg";
import redux from "../Images/redux.svg";
import typescript from "../Images/Typescript_logo_2020.svg.png";
import mongodb from "../Images/mongodb.svg";
import nodeJS from "../Images/node_js.svg";
import express from "../Images/expressJSnew.png";
import git from "../Images/git.svg";
import chakra from "../Images/chakraUI.jpg";
import cypress from "../Images/cypress.svg";

const Skills = () => {
  return (
    <div id="skills">
      <Heading textAlign="center" mt="85" mb="25" color="#48BB78">
        Skills
      </Heading>
      <Grid
        w="80%"
        m="auto"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={6}
        mb="50"
        className="skillsDiv"
      >
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={html5} m="auto" w="100px" h="50px" />
          <Text mt={5} fontWeight={600}>
            HTML
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={css3} m="auto" w="72px" h="50px" />
          <Text mt={5} fontWeight={600}>
            JavaScript
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={javaScript} m="auto" w="72px" h="50px" />
          <Text mt={5} fontWeight={600}>
            JavaScript
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={react} m="auto" w="82px" h="50px" />
          <Text mt={5} fontWeight={600}>
            React
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={redux} m="auto" w="82px" h="50px" />
          <Text mt={5} fontWeight={600}>
            Redux
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={mongodb} m="auto" w="80px" h="50px" />
          <Text mt={5} fontWeight={600}>
            MongoDB
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={express} m="auto" w="80px" h="50px" />

          <Text mt={5} fontWeight={600}>
            Express
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={nodeJS} m="auto" w="80px" h="50px" />
          <Text mt={5} fontWeight={600}>
            Node JS
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={git} m="auto" w="80px" h="50px" />
          <Text mt={5} fontWeight={600}>
            Git
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={typescript} m="auto" w="80px" h="50px" />

          <Text mt={5} fontWeight={600}>
            TypeScript
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={cypress} m="auto" w="80px" h="50px" />
          <Text mt={5} fontWeight={600}>
            Cypress
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image src={chakra} m="auto" w="80px" h="50px" />
          <Text mt={5} fontWeight={600}>
            Chakra UI
          </Text>
        </GridItem>
      </Grid>
      {/* <Image src={html5} /> */}
    </div>
  );
};

export default Skills;
