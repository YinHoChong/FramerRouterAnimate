import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = styled.div`
  font-family: Colfax, "Neue Helvetica W02", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  height: 60px;
  width: 100%;
  padding: 40px;
  color: rgb(255, 255, 255);
`;

const NavList = styled.ul`
  height: 100%;
  max-width: 980px;
  top: 0px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  list-style: none;
  margin: auto;
  padding: 0px;
  background: none;
  text-decoration: none;
`;
const NavItem = styled.li`
  user-select: none;
  -webkit-box-flex: 2;
  flex-grow: 2;
  transition: color 0.2s ease 0s;
  padding: 0px;
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;

  // &:focus {
  //   color: red;
  // }
  // ,
  // &:hover {
  //   color: blue;
  // }
  // ,
  // &:visited {
  //   color: white;
  // }
  // ,
  // &:link {
  //   color: white;
  // }
  // ,
  // &:active {
  //   color: green;
  // }
`;

export const Container = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  place-content: center;
  overflow: hidden;
  // background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;

  .item {
    width: 16%;
    overflow: visible;
    stroke: #fff;
    stroke-width: 0.2;
    stroke-linejoin: round;
    stroke-linecap: round;
    // background-color: red;
  }
`;

export const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

export const NavigationBar = () => (
  <Header>
    <NavList>
      <NavItem>
        <StyledLink to="/">
          <Container>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 21"
              className="item"
            >
              <motion.path
                d="M 0 0 L 14 0 L 14 7 L 7 7 Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 1.5, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.5, 1] }
                }}
              ></motion.path>
              <motion.path
                d="M 0 7 L 7 7 L 14 14 L 0 14 Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 1, ease: "easeInOut" },
                  fill: { duration: 1.5, ease: [1, 0, 0.5, 1] }
                }}
              ></motion.path>
              <motion.path
                d="M 0 14 L 7 14 L 7 21 Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 0.5, ease: "easeInOut" },
                  fill: { duration: 1, ease: [1, 0, 0.5, 1] }
                }}
              ></motion.path>
            </motion.svg>
          </Container>
        </StyledLink>
      </NavItem>

      <NavItem>
        <StyledLink to="/">Home</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/articles">Flexbox</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/projects">Projects</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/about">About</StyledLink>
      </NavItem>
    </NavList>
  </Header>
);
