import { Button, Text, Image } from "@chakra-ui/react";
import logo1 from "../Navbar/sandesh_logo.png";
import React, { useState } from "react";
// import ResumeFile from "./Sandesh-jadhav-5.pdf";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import { Icon } from "@chakra-ui/react";
import { smooth } from "react-router-hash-link";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import "./Navbar.css";
const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState(true);
  // const bg = useColorModeValue("red.500", "red.200");
  // const color = useColorModeValue("white", "gray.800");
  const changeMode = () => {
    setMode(!mode);
    toggleColorMode();
  };
  return (
    <div className={mode ? "navbar-light" : "navbar-dark"}>
      <Text fontSize={32} ml="2">
        SAN<span style={{ color: "red", fontSize: "2rem" }}>DESH</span>
      </Text>
      <ul
        className={isHamburger ? "hamburger" : "nav-links"}
        onClick={() => {
          setIsHamburger(false);
        }}
      >
        {/* to="/#home" */}
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="Home"
        >
          Home
        </Link>
        {/* to="#about"  */}
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="AboutMe"
        >
          About
        </Link>
        {/* to="/#skills" */}
        <Link
          className="Skills"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Skills
        </Link>
        {/* to="/#projects" */}
        <Link
          className="Projects"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
        {/* to="/#contact" */}
        <Link
          className="Contact"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
        {/* to="/resume" */}
        <a
          className="Resume"
          href="https://drive.google.com/file/d/1D_0EIwKGaVxiFy3_2DYsMQZ49pdmLT5C/view?usp=share_link"
          target="_blank"
        >
          Resume
        </a>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsHamburger(!isHamburger)}
      >
        {isHamburger ? <Icon as={CloseIcon} /> : <Icon as={HamburgerIcon} />}
      </button>{" "}
      <Button
        className="colorModeSwap"
        size="sm"
        mr="5"
        onClick={() => {
          changeMode();
        }}
      >
        {!mode && <SunIcon />}
        {mode && <MoonIcon />}
      </Button>
    </div>
  );
};

export default Navbar;
