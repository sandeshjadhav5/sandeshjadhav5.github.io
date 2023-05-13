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
        Technical Skills
      </Heading>
      <SimpleGrid
        minChildWidth={{ lg: "140px", md: "140px", sm: "140px", base: "100px" }}
        w="80%"
        m="auto"
        gap={6}
        mb="50"
        className="skills-card"
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
          className="skills-card-img"
        >
          <Image
            src="https://cdn.cdnlogo.com/logos/h/84/html.svg"
            m="auto"
            w="100px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://static.cdnlogo.com/logos/c/18/css.svg"
            m="auto"
            w="72px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://static.cdnlogo.com/logos/j/44/javascript.svg"
            m="auto"
            w="72px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://static.cdnlogo.com/logos/r/63/react.svg"
            m="auto"
            w="82px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/archive/8/8e/20230404233502%21Nextjs-logo.svg"
            m="auto"
            w="82px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
            NextJs
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
          className="skills-card-img"
        >
          <Image
            src="https://static.cdnlogo.com/logos/r/37/redux.svg"
            m="auto"
            w="82px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://static.cdnlogo.com/logos/m/25/mongodb.svg"
            m="auto"
            w="80px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/express.svg"
            m="auto"
            w="80px"
            h="50px"
          />

          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://static.cdnlogo.com/logos/n/79/node-js.svg"
            m="auto"
            w="80px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            m="auto"
            w="60px"
            h="50px"
          />

          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/04/cypress.png?fit=364%2C364&ssl=1"
            m="auto"
            w="70px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
            m="auto"
            w="60px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
            m="auto"
            w="60px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
            Tailwind
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
          className="skills-card-img"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024"
            m="auto"
            w="60px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
            BootStrap
          </Text>
        </Box>
      </SimpleGrid>
      <Heading
        textAlign="center"
        mb="25"
        color="#48BB78"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        Tools
      </Heading>
      <SimpleGrid
        minChildWidth={{ lg: "120px", md: "100px", sm: "100px", base: "100px" }}
        w="80%"
        m="auto"
        gap={6}
        mb="50"
        className="skills-card"
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skills-card-img"
        >
          <Image
            src="https://static-00.iconduck.com/assets.00/npm-icon-512x512-qtfdrf37.png"
            m="auto"
            w="60px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
            npm
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
          className="skills-card-img"
        >
          <Image
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            m="auto"
            w="80px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
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
          className="skills-card-img"
        >
          <Image
            src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8"
            m="auto"
            w="80px"
            h="50px"
          />

          <Text className="skills-card-name" mt={5} fontWeight={600}>
            Postman
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
          className="skills-card-img"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
            m="auto"
            w="80px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
            VS Code
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
          className="skills-card-img"
        >
          <Image
            src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67"
            m="auto"
            w="80px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
            Vercel
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
          className="skills-card-img"
        >
          <Image
            src="https://jeancochrane.com/static/images/blog/netlify-identity-dealbreakers/netlify-logo.png"
            m="auto"
            w="60px"
            h="50px"
          />

          <Text className="skills-card-name" mt={5} fontWeight={600}>
            Netlify
          </Text>
        </Box>

        {/* <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skills-card-img"
        >
          <Image
            src="https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.6.2/1681222207111/Microsoft.VisualStudio.Services.Icons.Default"
            m="auto"
            w="60px"
            h="50px"
          />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
            Thunder Client
          </Text>
        </Box> */}
        <Box
          data-aos="zoom-in"
          data-aos-duration="700"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skills-card-img"
        >
          <Image src="https://vitejs.dev/logo.svg" m="auto" w="60px" h="50px" />
          <Text className="skills-card-name" mt={5} fontWeight={600}>
            Vite
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Skills;
