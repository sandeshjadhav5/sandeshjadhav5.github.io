import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
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
      <h3 className="logo">SANDESH</h3>
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
        <Link className="Resume">Resume</Link>
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
