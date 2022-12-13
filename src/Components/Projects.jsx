import React from "react";
import nykaa from "../Images/nykaaProject.png";
import sephora from "../Images/sephora.png";
import myntra from "../Images/myntra.png";
import youtubeClone from "../Images/youtubeClone.png";
import { LinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Grid,
  GridItem,
  Image,
  Box,
  Badge,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <Heading mt="95" m="auto" mb="30" textAlign="center" color="#48BB78">
        Projects
      </Heading>
      <Grid
        gap="45"
        // templateRows="repeat(3, 1fr)"
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
        }}
        color="blackAlpha.700"
        w="70%"
        m="auto"
        fontWeight="bold"
      >
        <GridItem m="auto" p={2} w={{ base: "350px", md: "300px" }}>
          <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
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
                  Nykaa Website Clone
                </Text>
              </Box>

              <Box fontWeight="semibold" textAlign="center">
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
            <Box display="flex" justifyContent="space-evenly" mt="5">
              <Box borderRadius={10} p={2} color="#1A202C">
                <a
                  href="https://nykaawebsitebysandesh.netlify.app/"
                  target={"_blank"}
                >
                  Deployed Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} color="#1A202C">
                <a
                  href="https://github.com/sandeshjadhav5/choice-rice-2961/tree/main/nykaa-clone"
                  target="_blank"
                >
                  Github Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem m="auto" p={2} w={{ base: "350px", md: "300px" }}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={myntra} alt="nykaa" />

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

              <Box fontWeight="semibold" textAlign="center">
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
            <Box display="flex" justifyContent="space-evenly" mt="5">
              <Box borderRadius={10} p={2} color="#1A202C">
                <a href="https://myntraclonemasai.netlify.app/" target="_blank">
                  Deployed Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} color="#1A202C">
                <a
                  href="https://github.com/sandeshjadhav5/exotic-tail-7975"
                  target="_blank"
                >
                  Github Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem m="auto" pl="2" w={{ base: "350px", md: "300px" }}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={youtubeClone} alt="nykaa" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#822727" fontSize="25">
                  Youtube Clone
                </Text>
              </Box>

              <Box fontWeight="semibold" textAlign="center">
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
            <Box display="flex" justifyContent="space-evenly" mt="5">
              <Box borderRadius={10} p={2} color="#1A202C">
                <a href="https://youtubebysandesh.netlify.app/" target="_blank">
                  Deployed Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} color="#1A202C">
                <a
                  href="https://github.com/sandeshjadhav5/choice-rice-2961/tree/main/nykaa-clone"
                  target="_blank"
                >
                  Github Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem m="auto" pl="2" w={{ base: "350px", md: "300px" }}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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

              <Box fontWeight="semibold" textAlign="center">
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
            <Box display="flex" justifyContent="space-evenly" mt="5">
              <Box borderRadius={10} p={2} color="#1A202C">
                <a
                  href="https://idyllic-gecko-b72868.netlify.app/"
                  target="_blank"
                >
                  Deployed Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} color="#1A202C">
                <a
                  href="https://github.com/sandeshjadhav5/billowing-toothbrush-6922"
                  target="_blank"
                >
                  Github Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Projects;
