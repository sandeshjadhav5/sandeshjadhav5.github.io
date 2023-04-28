import { Button, Text, Image } from "@chakra-ui/react";
import logo1 from "../Navbar/sandesh_logo.png";
import React, { useState } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import { Icon } from "@chakra-ui/react";
import { smooth } from "react-router-hash-link";
import { useSelector, useDispatch } from "react-redux";

import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { changeColorMode } from "../../Redux/AppReducer/action";
const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState(true);
  const isDark = useSelector((state) => state.AppReducer.isDark);
  const dispatch = useDispatch();

  const changeMode = () => {
    setMode(!mode);
    toggleColorMode();
    dispatch(changeColorMode());
  };
  return (
    <div id="nav-menu" className={mode ? "navbar-light" : "navbar-dark"}>
      <Text fontSize={32} ml="5">
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
          class="nav-link about"
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
          class="nav-link skills"
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
          class="nav-link projects"
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
          class="nav-link resume"
          href="https://drive.google.com/u/0/uc?id=1D_0EIwKGaVxiFy3_2DYsMQZ49pdmLT5C&export=download"
        >
          <li
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1D_0EIwKGaVxiFy3_2DYsMQZ49pdmLT5C/view"
              )
            }
          >
            Resume
          </li>
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
